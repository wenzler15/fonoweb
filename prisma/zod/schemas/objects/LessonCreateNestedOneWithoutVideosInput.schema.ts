import { z } from 'zod'
import { LessonCreateWithoutVideosInputObjectSchema } from './LessonCreateWithoutVideosInput.schema'
import { LessonUncheckedCreateWithoutVideosInputObjectSchema } from './LessonUncheckedCreateWithoutVideosInput.schema'
import { LessonCreateOrConnectWithoutVideosInputObjectSchema } from './LessonCreateOrConnectWithoutVideosInput.schema'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateNestedOneWithoutVideosInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonCreateWithoutVideosInputObjectSchema),
						z.lazy(() => LessonUncheckedCreateWithoutVideosInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => LessonCreateOrConnectWithoutVideosInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => LessonWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const LessonCreateNestedOneWithoutVideosInputObjectSchema = Schema
