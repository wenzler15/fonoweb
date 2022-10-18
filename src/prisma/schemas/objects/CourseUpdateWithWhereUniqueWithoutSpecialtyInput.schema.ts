import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithoutSpecialtyInputObjectSchema } from './CourseUpdateWithoutSpecialtyInput.schema'
import { CourseUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './CourseUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => CourseUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => CourseUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const CourseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
