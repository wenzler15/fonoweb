import * as z from "zod"

export const Evaluation = z.object({
  id: z.string(),
  numericId: z.number().int(),
  patientId: z.string(),
  doctorId: z.string(),
  specialtyId: z.string(),
  text: z.string().nullish(),
  title: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
