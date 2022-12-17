import * as z from "zod"
import { AppointmentStatus } from "@prisma/client"

export const Appointment = z.object({
  id: z.string(),
  numericId: z.number().int(),
  doctorId: z.string(),
  patientId: z.string(),
  when: z.date(),
  end: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
  status: z.nativeEnum(AppointmentStatus),
})
