import * as z from "zod"

export const Course = z.object({
  id: z.string(),
  numericId: z.number().int(),
  creatorId: z.string(),
  specialtyId: z.string(),
  order: z.number().int(),
  title: z.string(),
  cover: z.string().nullish(),
  description: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
