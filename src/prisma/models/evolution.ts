import * as z from "zod"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const Evolution = z.object({
  id: z.string(),
  numericId: z.number().int(),
  patientId: z.string(),
  doctorId: z.string(),
  specialtyId: z.string(),
  exercises: jsonSchema,
  text: z.string().nullish(),
  title: z.string().nullish(),
  appointmentDate: z.date(),
  comments: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
