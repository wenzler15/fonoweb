import * as z from "zod"

export const Specialty = z.object({
  id: z.string(),
  numericId: z.number().int(),
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
