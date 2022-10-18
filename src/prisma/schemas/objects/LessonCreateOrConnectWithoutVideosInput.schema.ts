import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonCreateWithoutVideosInputObjectSchema } from './LessonCreateWithoutVideosInput.schema'
import { LessonUncheckedCreateWithoutVideosInputObjectSchema } from './LessonUncheckedCreateWithoutVideosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateOrConnectWithoutVideosInput> = z
	.object({
		where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => LessonCreateWithoutVideosInputObjectSchema),
			z.lazy(() => LessonUncheckedCreateWithoutVideosInputObjectSchema),
		]),
	})
	.strict()

export const LessonCreateOrConnectWithoutVideosInputObjectSchema = Schema
