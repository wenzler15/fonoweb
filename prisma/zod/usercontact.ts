import * as z from "zod"

export const UserContact = z.object({
  id: z.string(),
  numericId: z.number().int(),
  userId: z.string(),
  email: z.string().nullish(),
  area: z.string(),
  phone: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
