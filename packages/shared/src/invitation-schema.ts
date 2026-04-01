import { z } from "zod";

export const createInvitationSchema = z
  .object({
    inviteeUserId: z.string().cuid().optional(),
    inviteeEmail: z.string().email().optional(),
    message: z.string().max(500).nullable().optional(),
  })
  .refine((data) => !!data.inviteeUserId || !!data.inviteeEmail, {
    message: "inviteeUserId or inviteeEmail is required",
    path: ["inviteeUserId"],
  });

export type CreateInvitationInput = z.infer<typeof createInvitationSchema>;
