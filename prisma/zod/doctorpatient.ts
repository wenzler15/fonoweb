import * as z from "zod"

export const DoctorPatient = z.object({
  doctorId: z.string(),
  patientId: z.string(),
  assignedById: z.string(),
  createdAt: z.date(),
  active: z.boolean(),
})
