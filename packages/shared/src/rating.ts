export type CreateRatingDto = {
  score: number;
  comment?: string | null;
};

export type RatingDto = {
  id: string;
  score: number;
  comment: string | null;
  user: {
    id: string;
    fullName: string;
    avatarUrl: string | null;
  };
};

export type CreateRatingResponseDto = {
  id: string;
  score: number;
  comment: string | null;
};
