import { z } from "zod";

export const updateTripDaySchema = z.object({
  title: z.string().max(150).nullable().optional(),
  note: z.string().max(1000).nullable().optional(),
});

export type UpdateTripDayInput = z.infer<typeof updateTripDaySchema>;

export const createItineraryItemSchema = z.object({
  title: z.string().min(1).max(150),
  description: z.string().max(1000).nullable().optional(),
  placeName: z.string().max(150).nullable().optional(),
  placeAddress: z.string().max(255).nullable().optional(),
  country: z.string().max(100).nullable().optional(),
  city: z.string().max(100).nullable().optional(),
  startTime: z.string().datetime().nullable().optional(),
  endTime: z.string().datetime().nullable().optional(),
  estimatedCost: z.number().nonnegative().nullable().optional(),
  currency: z.string().max(10).nullable().optional(),
  note: z.string().max(1000).nullable().optional(),
  sortOrder: z.number().int().nonnegative().optional(),
});

export type CreateItineraryItemInput = z.infer<
  typeof createItineraryItemSchema
>;

export const updateItineraryItemSchema = createItineraryItemSchema
  .partial()
  .extend({
    isCompleted: z.boolean().optional(),
  });

export type UpdateItineraryItemInput = z.infer<
  typeof updateItineraryItemSchema
>;
