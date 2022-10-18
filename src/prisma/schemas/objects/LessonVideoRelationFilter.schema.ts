import { z } from 'zod'
import { LessonVideoWhereInputObjectSchema } from './LessonVideoWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoRelationFilter> = z
	.object({
		is: z.lazy(() => LessonVideoWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => LessonVideoWhereInputObjectSchema).optional(),
	})
	.strict()

export const LessonVideoRelationFilterObjectSchema = Schema
