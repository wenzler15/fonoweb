import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'
import { LessonVideoUpdateWithoutLessonInputObjectSchema } from './LessonVideoUpdateWithoutLessonInput.schema'
import { LessonVideoUncheckedUpdateWithoutLessonInputObjectSchema } from './LessonVideoUncheckedUpdateWithoutLessonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUpdateWithWhereUniqueWithoutLessonInput> =
	z
		.object({
			where: z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LessonVideoUpdateWithoutLessonInputObjectSchema),
				z.lazy(() => LessonVideoUncheckedUpdateWithoutLessonInputObjectSchema),
			]),
		})
		.strict()

export const LessonVideoUpdateWithWhereUniqueWithoutLessonInputObjectSchema =
	Schema
