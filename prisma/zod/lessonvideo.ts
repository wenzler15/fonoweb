import * as z from "zod"

export const LessonVideo = z.object({
  id: z.string(),
  numericId: z.number().int(),
  lessonId: z.string(),
  order: z.number().int(),
  title: z.string(),
  video: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
