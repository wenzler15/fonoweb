import { z } from 'zod'
import { CourseScalarWhereInputObjectSchema } from './CourseScalarWhereInput.schema'
import { CourseUpdateManyMutationInputObjectSchema } from './CourseUpdateManyMutationInput.schema'
import { CourseUncheckedUpdateManyWithoutCourseInputObjectSchema } from './CourseUncheckedUpdateManyWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpdateManyWithWhereWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => CourseScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => CourseUpdateManyMutationInputObjectSchema),
				z.lazy(() => CourseUncheckedUpdateManyWithoutCourseInputObjectSchema),
			]),
		})
		.strict()

export const CourseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema = Schema
