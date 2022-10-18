import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithoutCreatorInputObjectSchema } from './LessonUpdateWithoutCreatorInput.schema'
import { LessonUncheckedUpdateWithoutCreatorInputObjectSchema } from './LessonUncheckedUpdateWithoutCreatorInput.schema'
import { LessonCreateWithoutCreatorInputObjectSchema } from './LessonCreateWithoutCreatorInput.schema'
import { LessonUncheckedCreateWithoutCreatorInputObjectSchema } from './LessonUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpsertWithWhereUniqueWithoutCreatorInput> =
	z
		.object({
			where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => LessonUpdateWithoutCreatorInputObjectSchema),
				z.lazy(() => LessonUncheckedUpdateWithoutCreatorInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => LessonCreateWithoutCreatorInputObjectSchema),
				z.lazy(() => LessonUncheckedCreateWithoutCreatorInputObjectSchema),
			]),
		})
		.strict()

export const LessonUpsertWithWhereUniqueWithoutCreatorInputObjectSchema = Schema
