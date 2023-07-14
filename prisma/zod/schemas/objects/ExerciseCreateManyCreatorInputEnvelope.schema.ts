import { z } from 'zod'
import { ExerciseCreateManyCreatorInputObjectSchema } from './ExerciseCreateManyCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ExerciseCreateManyCreatorInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => ExerciseCreateManyCreatorInputObjectSchema),
			z.lazy(() => ExerciseCreateManyCreatorInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const ExerciseCreateManyCreatorInputEnvelopeObjectSchema = Schema
