import { z } from "zod";

export const createTripSchema = z
  .object({
    title: z.string().min(1).max(150),
    description: z.string().max(1000).nullable().optional(),
    destination: z.string().min(1).max(150),
    destinationCountry: z.string().max(100).nullable().optional(),
    destinationCity: z.string().max(100).nullable().optional(),
    budgetTotal: z.number().nonnegative().nullable().optional(),
    travelerCount: z.number().int().min(1),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
    timezone: z.string().default("Asia/Bangkok"),
    coverImageUrl: z.string().url().nullable().optional(),
  })
  .refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
    message: "startDate must be before or equal to endDate",
    path: ["endDate"],
  });

export type CreateTripInput = z.infer<typeof createTripSchema>;
