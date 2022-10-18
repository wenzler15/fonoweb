import { z } from 'zod'
import { LessonWhereInputObjectSchema } from './LessonWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonListRelationFilter> = z
	.object({
		every: z.lazy(() => LessonWhereInputObjectSchema).optional(),
		some: z.lazy(() => LessonWhereInputObjectSchema).optional(),
		none: z.lazy(() => LessonWhereInputObjectSchema).optional(),
	})
	.strict()

export const LessonListRelationFilterObjectSchema = Schema
