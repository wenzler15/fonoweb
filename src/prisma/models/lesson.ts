import * as z from "zod"

export const Lesson = z.object({
  id: z.string(),
  numericId: z.number().int(),
  creatorId: z.string(),
  courseId: z.string(),
  order: z.number().int(),
  title: z.string(),
  description: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
