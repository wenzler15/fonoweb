import { z } from 'zod'
import { CourseWhereInputObjectSchema } from './CourseWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseRelationFilter> = z
	.object({
		is: z.lazy(() => CourseWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => CourseWhereInputObjectSchema).optional(),
	})
	.strict()

export const CourseRelationFilterObjectSchema = Schema
