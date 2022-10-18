import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithoutSpecialtyInputObjectSchema } from './CourseUpdateWithoutSpecialtyInput.schema'
import { CourseUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './CourseUncheckedUpdateWithoutSpecialtyInput.schema'
import { CourseCreateWithoutSpecialtyInputObjectSchema } from './CourseCreateWithoutSpecialtyInput.schema'
import { CourseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './CourseUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => CourseUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => CourseUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => CourseCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => CourseUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const CourseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
