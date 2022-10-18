import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithoutCreatorInputObjectSchema } from './CourseUpdateWithoutCreatorInput.schema'
import { CourseUncheckedUpdateWithoutCreatorInputObjectSchema } from './CourseUncheckedUpdateWithoutCreatorInput.schema'
import { CourseCreateWithoutCreatorInputObjectSchema } from './CourseCreateWithoutCreatorInput.schema'
import { CourseUncheckedCreateWithoutCreatorInputObjectSchema } from './CourseUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpsertWithWhereUniqueWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => CourseUpdateWithoutCreatorInputObjectSchema),
				z.lazy(() => CourseUncheckedUpdateWithoutCreatorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => CourseCreateWithoutCreatorInputObjectSchema),
				z.lazy(() => CourseUncheckedCreateWithoutCreatorInputObjectSchema),
			]),
		})
		.strict()

export const CourseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema = Schema
