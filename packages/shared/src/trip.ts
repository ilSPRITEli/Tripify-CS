export const TRIP_STATUS = [
  "DRAFT",
  "ACTIVE",
  "COMPLETED",
  "ENDED_EARLY",
  "ARCHIVED",
  "CANCELLED",
] as const;

export type TripStatus = (typeof TRIP_STATUS)[number];

export const TRIP_MEMBER_ROLE = ["OWNER", "MEMBER"] as const;

export type TripMemberRole = (typeof TRIP_MEMBER_ROLE)[number];

export type CreateTripDto = {
  title: string;
  description?: string | null;
  destination: string;
  destinationCountry?: string | null;
  destinationCity?: string | null;
  budgetTotal?: number | null;
  travelerCount: number;
  startDate: string;
  endDate: string;
  timezone?: string;
  coverImageUrl?: string | null;
};

/** Response from `POST /trips` */
export type CreateTripResponseDto = {
  id: string;
  title: string;
  status: TripStatus;
};

export type TripListItemDto = {
  id: string;
  title: string;
  destination: string;
  destinationCountry: string | null;
  startDate: string;
  endDate: string;
  status: TripStatus;
  isTemplatePublished: boolean;
  owner: {
    id: string;
    fullName: string;
  };
};

export type TripMemberDto = {
  id: string;
  userId: string;
  role: TripMemberRole;
  joinedAt: string;
  user: {
    id: string;
    fullName: string;
    email?: string;
    avatarUrl: string | null;
  };
};

export type ItineraryItemDto = {
  id: string;
  title: string;
  description: string | null;
  placeName: string | null;
  placeAddress: string | null;
  country: string | null;
  city: string | null;
  startTime: string | null;
  endTime: string | null;
  estimatedCost: number | null;
  currency: string | null;
  note: string | null;
  sortOrder: number;
  isCompleted: boolean;
};

export type TripDayDto = {
  id: string;
  dayNumber: number;
  date: string;
  title: string | null;
  note: string | null;
  items: ItineraryItemDto[];
};

export type TripDetailDto = {
  id: string;
  title: string;
  description: string | null;
  destination: string;
  destinationCountry: string | null;
  destinationCity: string | null;
  budgetTotal: number | null;
  travelerCount: number;
  startDate: string;
  endDate: string;
  timezone: string;
  status: TripStatus;
  endedAt: string | null;
  isTemplatePublished: boolean;
  members: TripMemberDto[];
  days: TripDayDto[];
};

export type EndTripResponseDto = {
  id: string;
  status: TripStatus;
  endedAt: string;
};

export type UpdateTripDayDto = {
  title?: string | null;
  note?: string | null;
};

export type CreateItineraryItemDto = {
  title: string;
  description?: string | null;
  placeName?: string | null;
  placeAddress?: string | null;
  country?: string | null;
  city?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  estimatedCost?: number | null;
  currency?: string | null;
  note?: string | null;
  sortOrder?: number;
};

export type UpdateItineraryItemDto = Partial<CreateItineraryItemDto> & {
  isCompleted?: boolean;
};
