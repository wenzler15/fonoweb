import { z } from 'zod'
import { LessonWhereInputObjectSchema } from './LessonWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonRelationFilter> = z
	.object({
		is: z.lazy(() => LessonWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => LessonWhereInputObjectSchema).optional(),
	})
	.strict()

export const LessonRelationFilterObjectSchema = Schema
