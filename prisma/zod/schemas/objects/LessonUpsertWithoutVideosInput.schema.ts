import { z } from 'zod'
import { LessonUpdateWithoutVideosInputObjectSchema } from './LessonUpdateWithoutVideosInput.schema'
import { LessonUncheckedUpdateWithoutVideosInputObjectSchema } from './LessonUncheckedUpdateWithoutVideosInput.schema'
import { LessonCreateWithoutVideosInputObjectSchema } from './LessonCreateWithoutVideosInput.schema'
import { LessonUncheckedCreateWithoutVideosInputObjectSchema } from './LessonUncheckedCreateWithoutVideosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpsertWithoutVideosInput> = z
	.object({
		update: z.union([
			z.lazy(() => LessonUpdateWithoutVideosInputObjectSchema),
			z.lazy(() => LessonUncheckedUpdateWithoutVideosInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => LessonCreateWithoutVideosInputObjectSchema),
			z.lazy(() => LessonUncheckedCreateWithoutVideosInputObjectSchema),
		]),
	})
	.strict()

export const LessonUpsertWithoutVideosInputObjectSchema = Schema
