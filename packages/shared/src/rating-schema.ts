import { z } from "zod";

export const createRatingSchema = z.object({
  score: z.number().int().min(1).max(5),
  comment: z.string().max(1000).nullable().optional(),
});

export type CreateRatingInput = z.infer<typeof createRatingSchema>;
