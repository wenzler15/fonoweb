import { z } from 'zod'
import { ExerciseCreateManySpecialtyInputObjectSchema } from './ExerciseCreateManySpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseCreateManySpecialtyInputEnvelope> = z
	.object({
		data: z.lazy(() => ExerciseCreateManySpecialtyInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const ExerciseCreateManySpecialtyInputEnvelopeObjectSchema = Schema
