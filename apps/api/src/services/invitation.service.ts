import {
  INVITATION_STATUS,
  type CreateInvitationDto,
  type InvitationListItemDto,
  type InvitationStatus,
  type TripMemberDto,
} from "@repo/shared";
import { prisma } from "../lib/prisma";
import { toTripMemberDto } from "./trip.service";

function normEmail(e: string): string {
  return e.trim().toLowerCase();
}

type InviteResult =
  | { ok: true; id: string; status: InvitationStatus }
  | { ok: false; status: number; message: string };

export async function createInvitation(
  tripId: string,
  inviterUserId: string,
  input: CreateInvitationDto,
): Promise<InviteResult> {
  const trip = await prisma.trip.findUnique({
    where: { id: tripId },
    select: { id: true, ownerId: true },
  });
  if (!trip) {
    return { ok: false, status: 404, message: "Not found" };
  }
  if (trip.ownerId !== inviterUserId) {
    return { ok: false, status: 403, message: "Forbidden" };
  }

  const inviter = await prisma.user.findUnique({
    where: { id: inviterUserId },
    select: { email: true },
  });
  if (!inviter) {
    return { ok: false, status: 403, message: "Forbidden" };
  }

  if (input.inviteeUserId) {
    if (input.inviteeUserId === inviterUserId) {
      return { ok: false, status: 400, message: "Cannot invite yourself" };
    }
    const invitee = await prisma.user.findUnique({
      where: { id: input.inviteeUserId },
    });
    if (!invitee) {
      return { ok: false, status: 404, message: "User not found" };
    }

    const member = await prisma.tripMember.findUnique({
      where: { tripId_userId: { tripId, userId: invitee.id } },
    });
    if (member) {
      return { ok: false, status: 409, message: "User is already a member" };
    }

    const dup = await prisma.tripInvitation.findFirst({
      where: {
        tripId,
        status: "PENDING",
        inviteeUserId: invitee.id,
      },
    });
    if (dup) {
      return { ok: false, status: 409, message: "Invitation already pending" };
    }

    const created = await prisma.tripInvitation.create({
      data: {
        tripId,
        inviterId: inviterUserId,
        inviteeUserId: invitee.id,
        inviteeEmail: null,
        message: input.message ?? null,
        status: "PENDING",
      },
    });

    return {
      ok: true,
      id: created.id,
      status: created.status as InvitationStatus,
    };
  }

  if (input.inviteeEmail) {
    const email = normEmail(input.inviteeEmail);
    if (normEmail(inviter.email) === email) {
      return { ok: false, status: 400, message: "Cannot invite yourself" };
    }

    const inviteeByEmail = await prisma.user.findFirst({
      where: { email: { equals: email, mode: "insensitive" } },
    });

    let inviteeUserId: string | null = null;
    if (inviteeByEmail) {
      if (inviteeByEmail.id === inviterUserId) {
        return { ok: false, status: 400, message: "Cannot invite yourself" };
      }
      const member = await prisma.tripMember.findUnique({
        where: {
          tripId_userId: { tripId, userId: inviteeByEmail.id },
        },
      });
      if (member) {
        return { ok: false, status: 409, message: "User is already a member" };
      }
      inviteeUserId = inviteeByEmail.id;
    }

    const dup = await prisma.tripInvitation.findFirst({
      where: {
        tripId,
        status: "PENDING",
        OR: [
          { inviteeEmail: { equals: email, mode: "insensitive" } },
          ...(inviteeUserId ? [{ inviteeUserId }] : []),
        ],
      },
    });
    if (dup) {
      return { ok: false, status: 409, message: "Invitation already pending" };
    }

    const created = await prisma.tripInvitation.create({
      data: {
        tripId,
        inviterId: inviterUserId,
        inviteeUserId,
        inviteeEmail: inviteeUserId ? null : email,
        message: input.message ?? null,
        status: "PENDING",
      },
    });

    return {
      ok: true,
      id: created.id,
      status: created.status as InvitationStatus,
    };
  }

  return { ok: false, status: 400, message: "Invalid invitation" };
}

export async function getInvitations(
  userId: string,
  filters?: { status?: InvitationStatus; type?: "received" | "sent" },
): Promise<InvitationListItemDto[]> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { email: true },
  });
  if (!user) {
    return [];
  }

  const type = filters?.type ?? "received";

  const statusFilter =
    filters?.status &&
    (INVITATION_STATUS as readonly string[]).includes(filters.status)
      ? filters.status
      : undefined;

  const where: {
    status?: typeof statusFilter;
    inviterId?: string;
    OR?: Array<Record<string, unknown>>;
  } = {};

  if (statusFilter) {
    where.status = statusFilter;
  }

  if (type === "sent") {
    where.inviterId = userId;
  } else {
    where.OR = [
      { inviteeUserId: userId },
      { inviteeEmail: { equals: user.email, mode: "insensitive" } },
    ];
  }

  const rows = await prisma.tripInvitation.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      trip: { select: { id: true, title: true, destination: true } },
      inviter: { select: { id: true, fullName: true } },
    },
  });

  return rows.map((r) => ({
    id: r.id,
    status: r.status as InvitationListItemDto["status"],
    message: r.message,
    trip: r.trip,
    inviter: r.inviter,
  }));
}

function isInvitee(
  inv: {
    inviteeUserId: string | null;
    inviteeEmail: string | null;
  },
  userId: string,
  userEmail: string,
): boolean {
  if (inv.inviteeUserId === userId) {
    return true;
  }
  if (inv.inviteeEmail) {
    return inv.inviteeEmail.toLowerCase() === userEmail.toLowerCase();
  }
  return false;
}

type ActionResult = InviteResult;

export async function acceptInvitation(
  invitationId: string,
  userId: string,
): Promise<ActionResult> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { email: true },
  });
  if (!user) {
    return { ok: false, status: 401, message: "Unauthorized" };
  }

  const inv = await prisma.tripInvitation.findUnique({
    where: { id: invitationId },
  });
  if (!inv) {
    return { ok: false, status: 404, message: "Not found" };
  }
  if (inv.status !== "PENDING") {
    return { ok: false, status: 400, message: "Invitation is not pending" };
  }
  if (!isInvitee(inv, userId, user.email)) {
    return { ok: false, status: 403, message: "Forbidden" };
  }

  await prisma.$transaction(async (tx) => {
    await tx.tripInvitation.update({
      where: { id: invitationId },
      data: {
        status: "ACCEPTED",
        respondedAt: new Date(),
        inviteeUserId: userId,
      },
    });

    await tx.tripMember.upsert({
      where: {
        tripId_userId: { tripId: inv.tripId, userId },
      },
      create: {
        tripId: inv.tripId,
        userId,
        role: "MEMBER",
      },
      update: {},
    });
  });

  return { ok: true, id: invitationId, status: "ACCEPTED" };
}

export async function declineInvitation(
  invitationId: string,
  userId: string,
): Promise<ActionResult> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { email: true },
  });
  if (!user) {
    return { ok: false, status: 401, message: "Unauthorized" };
  }

  const inv = await prisma.tripInvitation.findUnique({
    where: { id: invitationId },
  });
  if (!inv) {
    return { ok: false, status: 404, message: "Not found" };
  }
  if (inv.status !== "PENDING") {
    return { ok: false, status: 400, message: "Invitation is not pending" };
  }
  if (!isInvitee(inv, userId, user.email)) {
    return { ok: false, status: 403, message: "Forbidden" };
  }

  await prisma.tripInvitation.update({
    where: { id: invitationId },
    data: {
      status: "DECLINED",
      respondedAt: new Date(),
    },
  });

  return { ok: true, id: invitationId, status: "DECLINED" };
}

export async function getTripMembers(
  tripId: string,
  userId: string,
): Promise<TripMemberDto[] | null> {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
      OR: [{ ownerId: userId }, { members: { some: { userId } } }],
    },
    include: {
      members: {
        include: { user: true },
        orderBy: { joinedAt: "asc" },
      },
    },
  });

  if (!trip) {
    return null;
  }

  return trip.members.map((m) => toTripMemberDto(m));
}
