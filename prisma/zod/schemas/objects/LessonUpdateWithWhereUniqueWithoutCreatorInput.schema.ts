import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithoutCreatorInputObjectSchema } from './LessonUpdateWithoutCreatorInput.schema'
import { LessonUncheckedUpdateWithoutCreatorInputObjectSchema } from './LessonUncheckedUpdateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpdateWithWhereUniqueWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => LessonUpdateWithoutCreatorInputObjectSchema),
				z.lazy(() => LessonUncheckedUpdateWithoutCreatorInputObjectSchema),
			]),
		})
		.strict()

export const LessonUpdateWithWhereUniqueWithoutCreatorInputObjectSchema = Schema
