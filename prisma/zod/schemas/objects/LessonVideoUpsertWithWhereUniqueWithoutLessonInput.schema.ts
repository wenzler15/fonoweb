import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'
import { LessonVideoUpdateWithoutLessonInputObjectSchema } from './LessonVideoUpdateWithoutLessonInput.schema'
import { LessonVideoUncheckedUpdateWithoutLessonInputObjectSchema } from './LessonVideoUncheckedUpdateWithoutLessonInput.schema'
import { LessonVideoCreateWithoutLessonInputObjectSchema } from './LessonVideoCreateWithoutLessonInput.schema'
import { LessonVideoUncheckedCreateWithoutLessonInputObjectSchema } from './LessonVideoUncheckedCreateWithoutLessonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUpsertWithWhereUniqueWithoutLessonInput> =
	z
		.object({
			where: z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LessonVideoUpdateWithoutLessonInputObjectSchema),
				z.lazy(() => LessonVideoUncheckedUpdateWithoutLessonInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LessonVideoCreateWithoutLessonInputObjectSchema),
				z.lazy(() => LessonVideoUncheckedCreateWithoutLessonInputObjectSchema),
			]),
		})
		.strict()

export const LessonVideoUpsertWithWhereUniqueWithoutLessonInputObjectSchema =
	Schema
