import type {
  CreateItineraryItemDto,
  CreateTripDto,
  ItineraryItemDto,
  TripDayDto,
  TripDetailDto,
  TripListItemDto,
  TripMemberDto,
  TripStatus,
  UpdateItineraryItemDto,
  UpdateTripDayDto,
} from "@repo/shared";
import { Prisma } from "../generated/prisma";
import { prisma } from "../lib/prisma";

function startOfUtcDay(d: Date): Date {
  return new Date(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()),
  );
}

function addUtcDays(d: Date, days: number): Date {
  const next = new Date(d);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function buildTripDaysInclusive(startIso: string, endIso: string): Date[] {
  const start = startOfUtcDay(new Date(startIso));
  const end = startOfUtcDay(new Date(endIso));
  const dates: Date[] = [];
  for (
    let cur = new Date(start);
    cur.getTime() <= end.getTime();
    cur = addUtcDays(cur, 1)
  ) {
    dates.push(new Date(cur));
  }
  return dates;
}

export async function createTrip(
  ownerId: string,
  input: CreateTripDto,
): Promise<{ id: string; title: string; status: string }> {
  const dates = buildTripDaysInclusive(input.startDate, input.endDate);

  const trip = await prisma.$transaction(async (tx) => {
    const created = await tx.trip.create({
      data: {
        ownerId,
        title: input.title,
        description: input.description ?? null,
        destination: input.destination,
        destinationCountry: input.destinationCountry ?? null,
        destinationCity: input.destinationCity ?? null,
        budgetTotal:
          input.budgetTotal != null
            ? new Prisma.Decimal(input.budgetTotal)
            : null,
        travelerCount: input.travelerCount,
        startDate: new Date(input.startDate),
        endDate: new Date(input.endDate),
        timezone: input.timezone ?? "Asia/Bangkok",
        coverImageUrl: input.coverImageUrl ?? null,
      },
    });

    await tx.tripMember.create({
      data: {
        tripId: created.id,
        userId: ownerId,
        role: "OWNER",
      },
    });

    if (dates.length > 0) {
      await tx.tripDay.createMany({
        data: dates.map((date, i) => ({
          tripId: created.id,
          dayNumber: i + 1,
          date,
          title: `Day ${i + 1}`,
        })),
      });
    }

    return created;
  });

  return {
    id: trip.id,
    title: trip.title,
    status: trip.status,
  };
}

function mapItineraryItem(row: {
  id: string;
  title: string;
  description: string | null;
  placeName: string | null;
  placeAddress: string | null;
  country: string | null;
  city: string | null;
  startTime: Date | null;
  endTime: Date | null;
  estimatedCost: Prisma.Decimal | null;
  currency: string | null;
  note: string | null;
  sortOrder: number;
  isCompleted: boolean;
}): ItineraryItemDto {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    placeName: row.placeName,
    placeAddress: row.placeAddress,
    country: row.country,
    city: row.city,
    startTime: row.startTime?.toISOString() ?? null,
    endTime: row.endTime?.toISOString() ?? null,
    estimatedCost:
      row.estimatedCost !== null ? row.estimatedCost.toNumber() : null,
    currency: row.currency,
    note: row.note,
    sortOrder: row.sortOrder,
    isCompleted: row.isCompleted,
  };
}

function mapTripDay(row: {
  id: string;
  dayNumber: number;
  date: Date;
  title: string | null;
  note: string | null;
  items: Array<Parameters<typeof mapItineraryItem>[0]>;
}): TripDayDto {
  return {
    id: row.id,
    dayNumber: row.dayNumber,
    date: row.date.toISOString(),
    title: row.title,
    note: row.note,
    items: row.items.map(mapItineraryItem),
  };
}

export function toTripMemberDto(row: {
  id: string;
  userId: string;
  role: string;
  joinedAt: Date;
  user: {
    id: string;
    fullName: string;
    email: string;
    avatarUrl: string | null;
  };
}): TripMemberDto {
  return {
    id: row.id,
    userId: row.userId,
    role: row.role as TripMemberDto["role"],
    joinedAt: row.joinedAt.toISOString(),
    user: {
      id: row.user.id,
      fullName: row.user.fullName,
      email: row.user.email,
      avatarUrl: row.user.avatarUrl,
    },
  };
}

export async function getMyTrips(
  userId: string,
  filters?: { status?: TripStatus; isTemplatePublished?: boolean },
): Promise<TripListItemDto[]> {
  const trips = await prisma.trip.findMany({
    where: {
      OR: [{ ownerId: userId }, { members: { some: { userId } } }],
      ...(filters?.status ? { status: filters.status } : {}),
      ...(filters?.isTemplatePublished !== undefined
        ? { isTemplatePublished: filters.isTemplatePublished }
        : {}),
    },
    orderBy: { startDate: "desc" },
    include: {
      owner: { select: { id: true, fullName: true } },
    },
  });

  return trips.map((t) => ({
    id: t.id,
    title: t.title,
    destination: t.destination,
    destinationCountry: t.destinationCountry,
    startDate: t.startDate.toISOString(),
    endDate: t.endDate.toISOString(),
    status: t.status as TripListItemDto["status"],
    isTemplatePublished: t.isTemplatePublished,
    owner: { id: t.owner.id, fullName: t.owner.fullName },
  }));
}

export async function getTripById(
  tripId: string,
  userId: string,
): Promise<TripDetailDto | null> {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
      OR: [{ ownerId: userId }, { members: { some: { userId } } }],
    },
    include: {
      members: {
        include: {
          user: true,
        },
      },
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
    status: trip.status as TripDetailDto["status"],
    isTemplatePublished: trip.isTemplatePublished,
    members: trip.members.map(toTripMemberDto),
    days: trip.days.map((d) =>
      mapTripDay({
        ...d,
        items: d.items,
      }),
    ),
  };
}

function tripAccessibleByUser(userId: string) {
  return {
    OR: [{ ownerId: userId }, { members: { some: { userId } } }],
  };
}

export async function getTripDays(
  tripId: string,
  userId: string,
): Promise<TripDayDto[] | null> {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
      ...tripAccessibleByUser(userId),
    },
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

  return trip.days.map((d) => mapTripDay({ ...d, items: d.items }));
}

export async function updateTripDay(
  tripDayId: string,
  userId: string,
  input: UpdateTripDayDto,
): Promise<TripDayDto | null> {
  const allowed = await prisma.tripDay.count({
    where: {
      id: tripDayId,
      trip: tripAccessibleByUser(userId),
    },
  });

  if (!allowed) {
    return null;
  }

  const updated = await prisma.tripDay.update({
    where: { id: tripDayId },
    data: {
      ...(input.title !== undefined ? { title: input.title } : {}),
      ...(input.note !== undefined ? { note: input.note } : {}),
    },
    include: {
      items: { orderBy: { sortOrder: "asc" } },
    },
  });

  return mapTripDay(updated);
}

export async function createItineraryItem(
  tripDayId: string,
  userId: string,
  input: CreateItineraryItemDto,
): Promise<ItineraryItemDto | null> {
  const allowed = await prisma.tripDay.count({
    where: {
      id: tripDayId,
      trip: tripAccessibleByUser(userId),
    },
  });

  if (!allowed) {
    return null;
  }

  const agg = await prisma.itineraryItem.aggregate({
    where: { tripDayId },
    _max: { sortOrder: true },
  });
  const sortOrder =
    input.sortOrder ?? (agg._max.sortOrder ?? -1) + 1;

  const created = await prisma.itineraryItem.create({
    data: {
      tripDayId,
      title: input.title,
      description: input.description ?? null,
      placeName: input.placeName ?? null,
      placeAddress: input.placeAddress ?? null,
      country: input.country ?? null,
      city: input.city ?? null,
      startTime: input.startTime ? new Date(input.startTime) : null,
      endTime: input.endTime ? new Date(input.endTime) : null,
      estimatedCost:
        input.estimatedCost != null
          ? new Prisma.Decimal(input.estimatedCost)
          : null,
      currency: input.currency ?? null,
      note: input.note ?? null,
      sortOrder,
    },
  });

  return mapItineraryItem(created);
}

export async function updateItineraryItem(
  itemId: string,
  userId: string,
  input: UpdateItineraryItemDto,
): Promise<ItineraryItemDto | null> {
  const allowed = await prisma.itineraryItem.count({
    where: {
      id: itemId,
      tripDay: {
        trip: tripAccessibleByUser(userId),
      },
    },
  });

  if (!allowed) {
    return null;
  }

  const data: Prisma.ItineraryItemUpdateInput = {};
  if (input.title !== undefined) data.title = input.title;
  if (input.description !== undefined) data.description = input.description;
  if (input.placeName !== undefined) data.placeName = input.placeName;
  if (input.placeAddress !== undefined)
    data.placeAddress = input.placeAddress;
  if (input.country !== undefined) data.country = input.country;
  if (input.city !== undefined) data.city = input.city;
  if (input.startTime !== undefined) {
    data.startTime =
      input.startTime === null ? null : new Date(input.startTime);
  }
  if (input.endTime !== undefined) {
    data.endTime = input.endTime === null ? null : new Date(input.endTime);
  }
  if (input.estimatedCost !== undefined) {
    data.estimatedCost =
      input.estimatedCost === null
        ? null
        : new Prisma.Decimal(input.estimatedCost);
  }
  if (input.currency !== undefined) data.currency = input.currency;
  if (input.note !== undefined) data.note = input.note;
  if (input.sortOrder !== undefined) data.sortOrder = input.sortOrder;
  if (input.isCompleted !== undefined) data.isCompleted = input.isCompleted;

  const updated = await prisma.itineraryItem.update({
    where: { id: itemId },
    data,
  });

  return mapItineraryItem(updated);
}

export async function deleteItineraryItem(
  itemId: string,
  userId: string,
): Promise<{ id: string } | null> {
  const allowed = await prisma.itineraryItem.count({
    where: {
      id: itemId,
      tripDay: {
        trip: tripAccessibleByUser(userId),
      },
    },
  });

  if (!allowed) {
    return null;
  }

  await prisma.itineraryItem.delete({ where: { id: itemId } });

  return { id: itemId };
}
