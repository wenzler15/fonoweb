import { z } from 'zod'
import { LessonVideoWhereInputObjectSchema } from './LessonVideoWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoListRelationFilter> = z
	.object({
		every: z.lazy(() => LessonVideoWhereInputObjectSchema).optional(),
		some: z.lazy(() => LessonVideoWhereInputObjectSchema).optional(),
		none: z.lazy(() => LessonVideoWhereInputObjectSchema).optional(),
	})
	.strict()

export const LessonVideoListRelationFilterObjectSchema = Schema
