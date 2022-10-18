import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithoutCreatorInputObjectSchema } from './CourseUpdateWithoutCreatorInput.schema'
import { CourseUncheckedUpdateWithoutCreatorInputObjectSchema } from './CourseUncheckedUpdateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpdateWithWhereUniqueWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => CourseUpdateWithoutCreatorInputObjectSchema),
				z.lazy(() => CourseUncheckedUpdateWithoutCreatorInputObjectSchema),
			]),
		})
		.strict()

export const CourseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema = Schema
