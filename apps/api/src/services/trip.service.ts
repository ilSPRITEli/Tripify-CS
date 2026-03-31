import type {
  CreateTripDto,
  TripDetailDto,
  TripDayDto,
  ItineraryItemDto,
  TripMemberDto,
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

function mapTripMember(row: {
  id: string;
  userId: string;
  role: string;
  joinedAt: Date;
  user: { fullName: string; email: string; avatarUrl: string | null };
}): TripMemberDto {
  return {
    id: row.id,
    userId: row.userId,
    role: row.role as TripMemberDto["role"],
    joinedAt: row.joinedAt.toISOString(),
    user: {
      fullName: row.user.fullName,
      email: row.user.email,
      avatarUrl: row.user.avatarUrl,
    },
  };
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
    budgetTotal:
      trip.budgetTotal !== null ? trip.budgetTotal.toNumber() : null,
    travelerCount: trip.travelerCount,
    startDate: trip.startDate.toISOString(),
    endDate: trip.endDate.toISOString(),
    timezone: trip.timezone,
    status: trip.status as TripDetailDto["status"],
    isTemplatePublished: trip.isTemplatePublished,
    members: trip.members.map(mapTripMember),
    days: trip.days.map((d) =>
      mapTripDay({
        ...d,
        items: d.items,
      }),
    ),
  };
}
