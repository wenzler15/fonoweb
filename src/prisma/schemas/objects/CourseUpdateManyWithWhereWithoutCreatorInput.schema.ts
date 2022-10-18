import { z } from 'zod'
import { CourseScalarWhereInputObjectSchema } from './CourseScalarWhereInput.schema'
import { CourseUpdateManyMutationInputObjectSchema } from './CourseUpdateManyMutationInput.schema'
import { CourseUncheckedUpdateManyWithoutCoursesInputObjectSchema } from './CourseUncheckedUpdateManyWithoutCoursesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpdateManyWithWhereWithoutCreatorInput> = z
	.object({
		where: z.lazy(() => CourseScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => CourseUpdateManyMutationInputObjectSchema),
			z.lazy(() => CourseUncheckedUpdateManyWithoutCoursesInputObjectSchema),
		]),
	})
	.strict()

export const CourseUpdateManyWithWhereWithoutCreatorInputObjectSchema = Schema
