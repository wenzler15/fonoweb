import * as z from "zod"

export const Patient = z.object({
  id: z.string(),
  numericId: z.number().int(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
