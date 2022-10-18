import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonCreateWithoutCourseInputObjectSchema } from './LessonCreateWithoutCourseInput.schema'
import { LessonUncheckedCreateWithoutCourseInputObjectSchema } from './LessonUncheckedCreateWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateOrConnectWithoutCourseInput> = z
	.object({
		where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => LessonCreateWithoutCourseInputObjectSchema),
			z.lazy(() => LessonUncheckedCreateWithoutCourseInputObjectSchema),
		]),
	})
	.strict()

export const LessonCreateOrConnectWithoutCourseInputObjectSchema = Schema
