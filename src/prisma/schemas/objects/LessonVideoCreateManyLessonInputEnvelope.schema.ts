import { z } from 'zod'
import { LessonVideoCreateManyLessonInputObjectSchema } from './LessonVideoCreateManyLessonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoCreateManyLessonInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => LessonVideoCreateManyLessonInputObjectSchema),
			z.lazy(() => LessonVideoCreateManyLessonInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const LessonVideoCreateManyLessonInputEnvelopeObjectSchema = Schema
