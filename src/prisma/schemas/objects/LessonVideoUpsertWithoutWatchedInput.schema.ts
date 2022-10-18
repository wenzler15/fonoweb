import { z } from 'zod'
import { LessonVideoUpdateWithoutWatchedInputObjectSchema } from './LessonVideoUpdateWithoutWatchedInput.schema'
import { LessonVideoUncheckedUpdateWithoutWatchedInputObjectSchema } from './LessonVideoUncheckedUpdateWithoutWatchedInput.schema'
import { LessonVideoCreateWithoutWatchedInputObjectSchema } from './LessonVideoCreateWithoutWatchedInput.schema'
import { LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema } from './LessonVideoUncheckedCreateWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUpsertWithoutWatchedInput> = z
	.object({
		update: z.union([
			z.lazy(() => LessonVideoUpdateWithoutWatchedInputObjectSchema),
			z.lazy(() => LessonVideoUncheckedUpdateWithoutWatchedInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => LessonVideoCreateWithoutWatchedInputObjectSchema),
			z.lazy(() => LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema),
		]),
	})
	.strict()

export const LessonVideoUpsertWithoutWatchedInputObjectSchema = Schema
