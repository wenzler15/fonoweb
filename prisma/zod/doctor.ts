import * as z from "zod"

export const Doctor = z.object({
  id: z.string(),
  numericId: z.number().int(),
  userId: z.string(),
  specialtyId: z.string(),
  crfa: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
