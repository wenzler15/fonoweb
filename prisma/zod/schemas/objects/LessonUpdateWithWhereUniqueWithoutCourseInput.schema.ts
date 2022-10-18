import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithoutCourseInputObjectSchema } from './LessonUpdateWithoutCourseInput.schema'
import { LessonUncheckedUpdateWithoutCourseInputObjectSchema } from './LessonUncheckedUpdateWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpdateWithWhereUniqueWithoutCourseInput> =
	z
		.object({
			where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LessonUpdateWithoutCourseInputObjectSchema),
				z.lazy(() => LessonUncheckedUpdateWithoutCourseInputObjectSchema),
			]),
		})
		.strict()

export const LessonUpdateWithWhereUniqueWithoutCourseInputObjectSchema = Schema
