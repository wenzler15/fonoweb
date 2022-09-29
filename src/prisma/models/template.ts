import * as z from "zod"
import { TemplateType } from "@prisma/client/.prisma/client"

export const Template = z.object({
  id: z.string(),
  numericId: z.number().int(),
  doctorId: z.string(),
  type: z.nativeEnum(TemplateType),
  specialtyId: z.string(),
  title: z.string(),
  html: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
