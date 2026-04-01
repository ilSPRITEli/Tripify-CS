import type {
  CreateRatingDto,
  CreateRatingResponseDto,
  RatingDto,
} from "@repo/shared";
import { Prisma } from "../generated/prisma";
import { prisma } from "../lib/prisma";

function tripAccessibleByUser(userId: string) {
  return {
    OR: [{ ownerId: userId }, { members: { some: { userId } } }],
  };
}

type CreateResult =
  | { ok: true; data: CreateRatingResponseDto }
  | { ok: false; status: number; message: string };

export async function createRating(
  tripId: string,
  userId: string,
  input: CreateRatingDto,
): Promise<CreateResult> {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
      ...tripAccessibleByUser(userId),
    },
    select: { id: true, status: true },
  });

  if (!trip) {
    return { ok: false, status: 404, message: "Not found" };
  }

  if (trip.status !== "COMPLETED" && trip.status !== "ENDED_EARLY") {
    return {
      ok: false,
      status: 400,
      message: "Trip must be completed or ended early",
    };
  }

  try {
    const created = await prisma.rating.create({
      data: {
        tripId,
        userId,
        score: input.score,
        comment: input.comment ?? null,
      },
    });

    return {
      ok: true,
      data: {
        id: created.id,
        score: created.score,
        comment: created.comment,
      },
    };
  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === "P2002"
    ) {
      return { ok: false, status: 409, message: "Already rated" };
    }
    throw e;
  }
}

export async function getTripRatings(
  tripId: string,
  userId: string,
): Promise<RatingDto[] | null> {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
      ...tripAccessibleByUser(userId),
    },
    include: {
      ratings: {
        include: {
          user: {
            select: { id: true, fullName: true, avatarUrl: true },
          },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!trip) {
    return null;
  }

  return trip.ratings.map((r) => ({
    id: r.id,
    score: r.score,
    comment: r.comment,
    user: {
      id: r.user.id,
      fullName: r.user.fullName,
      avatarUrl: r.user.avatarUrl,
    },
  }));
}
