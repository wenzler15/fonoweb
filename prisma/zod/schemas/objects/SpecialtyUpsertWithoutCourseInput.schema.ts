import { z } from 'zod'
import { SpecialtyUpdateWithoutCourseInputObjectSchema } from './SpecialtyUpdateWithoutCourseInput.schema'
import { SpecialtyUncheckedUpdateWithoutCourseInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutCourseInput.schema'
import { SpecialtyCreateWithoutCourseInputObjectSchema } from './SpecialtyCreateWithoutCourseInput.schema'
import { SpecialtyUncheckedCreateWithoutCourseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutCourseInput> = z
	.object({
		update: z.union([
			z.lazy(() => SpecialtyUpdateWithoutCourseInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedUpdateWithoutCourseInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutCourseInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutCourseInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyUpsertWithoutCourseInputObjectSchema = Schema
