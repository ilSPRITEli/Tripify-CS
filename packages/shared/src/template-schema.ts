import { z } from "zod";

export const cloneTemplateSchema = z
  .object({
    title: z.string().min(1).max(150),
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
  })
  .refine((data) => new Date(data.startDate) <= new Date(data.endDate), {
    message: "startDate must be before or equal to endDate",
    path: ["endDate"],
  });

export type CloneTemplateInput = z.infer<typeof cloneTemplateSchema>;
