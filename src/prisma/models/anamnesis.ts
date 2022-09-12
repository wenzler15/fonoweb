import * as z from "zod"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const Anamnesis = z.object({
  id: z.string(),
  numericId: z.number().int(),
  patientId: z.string(),
  doctorId: z.string(),
  specialtyId: z.string(),
  questions: jsonSchema,
  title: z.string().nullish(),
  text: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
})
