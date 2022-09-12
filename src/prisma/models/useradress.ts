import * as z from "zod"

export const UserAdress = z.object({
  id: z.string(),
  numericId: z.number().int(),
  userId: z.string(),
  streetName: z.string(),
  zipCode: z.string(),
  district: z.string(),
  state: z.string(),
  city: z.string(),
  number: z.string(),
  complement: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
