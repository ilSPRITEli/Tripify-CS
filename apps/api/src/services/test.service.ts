import type { TripListItemDto, TripStatus } from "@repo/shared";
import { prisma } from "../lib/prisma";

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
