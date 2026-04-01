import type {
  CloneTemplateDto,
  PublishTemplateResponseDto,
  TemplateListItemDto,
  TripDetailDto,
  TripStatus,
} from "@repo/shared";
import { prisma } from "../lib/prisma";
import {
  buildTripDaysInclusive,
  mapTripDay,
  startOfUtcDay,
  toTripMemberDto,
} from "./trip.service";

type PublishResult =
  | { ok: true; data: PublishTemplateResponseDto }
  | { ok: false; status: number; message: string };

export async function publishTemplate(
  tripId: string,
  userId: string,
): Promise<PublishResult> {
  const trip = await prisma.trip.findUnique({
    where: { id: tripId },
    select: { id: true, ownerId: true },
  });
  if (!trip) {
    return { ok: false, status: 404, message: "Not found" };
  }
  if (trip.ownerId !== userId) {
    return { ok: false, status: 403, message: "Forbidden" };
  }

  const now = new Date();
  const updated = await prisma.trip.update({
    where: { id: tripId },
    data: {
      isTemplatePublished: true,
      templatePublishedAt: now,
    },
  });

  return {
    ok: true,
    data: {
      id: updated.id,
      isTemplatePublished: updated.isTemplatePublished,
      templatePublishedAt: updated.templatePublishedAt?.toISOString() ?? null,
    },
  };
}

export async function getTemplates(filters?: {
  destinationCountry?: string;
  q?: string;
}): Promise<TemplateListItemDto[]> {
  const q = filters?.q?.trim();
  const country = filters?.destinationCountry?.trim();

  const trips = await prisma.trip.findMany({
    where: {
      isTemplatePublished: true,
      ...(country
        ? {
            destinationCountry: {
              equals: country,
              mode: "insensitive" as const,
            },
          }
        : {}),
      ...(q
        ? {
            OR: [
              { title: { contains: q, mode: "insensitive" } },
              { destination: { contains: q, mode: "insensitive" } },
            ],
          }
        : {}),
    },
    orderBy: { templatePublishedAt: "desc" },
    include: {
      owner: { select: { id: true, fullName: true } },
    },
  });

  return trips.map((t) => ({
    id: t.id,
    title: t.title,
    destination: t.destination,
    destinationCountry: t.destinationCountry,
    travelerCount: t.travelerCount,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString(),
    templateUseCount: t.templateUseCount,
    owner: { id: t.owner.id, fullName: t.owner.fullName },
  }));
}

export async function getTemplateById(
  tripId: string,
): Promise<TripDetailDto | null> {
  const trip = await prisma.trip.findFirst({
    where: { id: tripId, isTemplatePublished: true },
    include: {
      days: {
        orderBy: { dayNumber: "asc" },
        include: {
          items: { orderBy: { sortOrder: "asc" } },
        },
      },
    },
  });

  if (!trip) {
    return null;
  }

  const ownerMembership = await prisma.tripMember.findFirst({
    where: { tripId, role: "OWNER" },
    include: { user: true },
  });

  if (!ownerMembership) {
    return null;
  }

  return {
    id: trip.id,
    title: trip.title,
    description: trip.description,
    destination: trip.destination,
    destinationCountry: trip.destinationCountry,
    destinationCity: trip.destinationCity,
    budgetTotal: trip.budgetTotal !== null ? trip.budgetTotal.toNumber() : null,
    travelerCount: trip.travelerCount,
    startDate: trip.startDate.toISOString(),
    endDate: trip.endDate.toISOString(),
    timezone: trip.timezone,
    status: trip.status as TripStatus,
    endedAt: trip.endedAt?.toISOString() ?? null,
    isTemplatePublished: trip.isTemplatePublished,
    templateUseCount: trip.templateUseCount,
    templatePublishedAt: trip.templatePublishedAt?.toISOString() ?? null,
    members: [toTripMemberDto(ownerMembership)],
    days: trip.days.map((d) =>
      mapTripDay({
        ...d,
        items: d.items,
      }),
    ),
  };
}

type CloneResult =
  | { ok: true; id: string; title: string }
  | { ok: false; status: number; message: string };

export async function cloneTemplate(
  sourceTripId: string,
  newOwnerId: string,
  input: CloneTemplateDto,
): Promise<CloneResult> {
  const source = await prisma.trip.findFirst({
    where: { id: sourceTripId, isTemplatePublished: true },
    include: {
      days: {
        orderBy: { dayNumber: "asc" },
        include: {
          items: { orderBy: { sortOrder: "asc" } },
        },
      },
    },
  });

  if (!source) {
    return { ok: false, status: 404, message: "Template not found" };
  }

  const newDates = buildTripDaysInclusive(input.startDate, input.endDate);

  if (source.days.length > 0 && newDates.length !== source.days.length) {
    return {
      ok: false,
      status: 400,
      message: `This template has ${source.days.length} day(s); pick a date range with the same number of days.`,
    };
  }

  const { id, title } = await prisma.$transaction(async (tx) => {
    const created = await tx.trip.create({
      data: {
        ownerId: newOwnerId,
        title: input.title,
        description: source.description,
        destination: source.destination,
        destinationCountry: source.destinationCountry,
        destinationCity: source.destinationCity,
        budgetTotal: source.budgetTotal,
        travelerCount: source.travelerCount,
        startDate: new Date(input.startDate),
        endDate: new Date(input.endDate),
        timezone: source.timezone,
        coverImageUrl: source.coverImageUrl,
        status: "DRAFT",
      },
    });

    await tx.tripMember.create({
      data: {
        tripId: created.id,
        userId: newOwnerId,
        role: "OWNER",
      },
    });

    for (let i = 0; i < newDates.length; i++) {
      const sourceDay = source.days[i];
      const newDay = await tx.tripDay.create({
        data: {
          tripId: created.id,
          dayNumber: i + 1,
          date: newDates[i]!,
          title: sourceDay?.title ?? `Day ${i + 1}`,
          note: sourceDay?.note ?? null,
        },
      });

      if (sourceDay?.items?.length) {
        const offsetMs =
          startOfUtcDay(newDates[i]!).getTime() -
          startOfUtcDay(sourceDay.date).getTime();

        for (const item of sourceDay.items) {
          await tx.itineraryItem.create({
            data: {
              tripDayId: newDay.id,
              title: item.title,
              description: item.description,
              placeName: item.placeName,
              placeAddress: item.placeAddress,
              country: item.country,
              city: item.city,
              latitude: item.latitude,
              longitude: item.longitude,
              startTime: item.startTime
                ? new Date(item.startTime.getTime() + offsetMs)
                : null,
              endTime: item.endTime
                ? new Date(item.endTime.getTime() + offsetMs)
                : null,
              estimatedCost: item.estimatedCost,
              currency: item.currency,
              note: item.note,
              sortOrder: item.sortOrder,
              isCompleted: false,
            },
          });
        }
      }
    }

    await tx.trip.update({
      where: { id: sourceTripId },
      data: { templateUseCount: { increment: 1 } },
    });

    return { id: created.id, title: created.title };
  });

  return { ok: true, id, title };
}
