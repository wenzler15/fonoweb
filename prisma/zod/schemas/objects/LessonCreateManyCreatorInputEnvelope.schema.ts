import { z } from 'zod'
import { LessonCreateManyCreatorInputObjectSchema } from './LessonCreateManyCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateManyCreatorInputEnvelope> = z
	.object({
		data: z.lazy(() => LessonCreateManyCreatorInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const LessonCreateManyCreatorInputEnvelopeObjectSchema = Schema
