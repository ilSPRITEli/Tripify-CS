export const INVITATION_STATUS = [
  "PENDING",
  "ACCEPTED",
  "DECLINED",
  "EXPIRED",
  "REVOKED",
  "CANCELLED",
] as const;

export type InvitationStatus = (typeof INVITATION_STATUS)[number];

export type CreateInvitationDto = {
  inviteeUserId?: string;
  inviteeEmail?: string;
  message?: string | null;
};

export type InvitationListItemDto = {
  id: string;
  status: InvitationStatus;
  message: string | null;
  trip: {
    id: string;
    title: string;
    destination: string;
  };
  inviter: {
    id: string;
    fullName: string;
  };
};

export type CreateInvitationResponseDto = {
  id: string;
  status: InvitationStatus;
};

export type InvitationActionResponseDto = {
  id: string;
  status: InvitationStatus;
};
