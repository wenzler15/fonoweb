import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithoutCourseInputObjectSchema } from './LessonUpdateWithoutCourseInput.schema'
import { LessonUncheckedUpdateWithoutCourseInputObjectSchema } from './LessonUncheckedUpdateWithoutCourseInput.schema'
import { LessonCreateWithoutCourseInputObjectSchema } from './LessonCreateWithoutCourseInput.schema'
import { LessonUncheckedCreateWithoutCourseInputObjectSchema } from './LessonUncheckedCreateWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpsertWithWhereUniqueWithoutCourseInput> =
	z
		.object({
			where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LessonUpdateWithoutCourseInputObjectSchema),
				z.lazy(() => LessonUncheckedUpdateWithoutCourseInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LessonCreateWithoutCourseInputObjectSchema),
				z.lazy(() => LessonUncheckedCreateWithoutCourseInputObjectSchema),
			]),
		})
		.strict()

export const LessonUpsertWithWhereUniqueWithoutCourseInputObjectSchema = Schema
