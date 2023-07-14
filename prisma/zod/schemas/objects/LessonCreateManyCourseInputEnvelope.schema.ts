import { z } from 'zod'
import { LessonCreateManyCourseInputObjectSchema } from './LessonCreateManyCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateManyCourseInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => LessonCreateManyCourseInputObjectSchema),
			z.lazy(() => LessonCreateManyCourseInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict()

export const LessonCreateManyCourseInputEnvelopeObjectSchema = Schema
