import { z } from 'zod'
import { LessonCreateWithoutVideosInputObjectSchema } from './LessonCreateWithoutVideosInput.schema'
import { LessonUncheckedCreateWithoutVideosInputObjectSchema } from './LessonUncheckedCreateWithoutVideosInput.schema'
import { LessonCreateOrConnectWithoutVideosInputObjectSchema } from './LessonCreateOrConnectWithoutVideosInput.schema'
import { LessonUpsertWithoutVideosInputObjectSchema } from './LessonUpsertWithoutVideosInput.schema'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonUpdateWithoutVideosInputObjectSchema } from './LessonUpdateWithoutVideosInput.schema'
import { LessonUncheckedUpdateWithoutVideosInputObjectSchema } from './LessonUncheckedUpdateWithoutVideosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpdateOneRequiredWithoutVideosNestedInput> =
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
				upsert: z
					.lazy(() => LessonUpsertWithoutVideosInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => LessonWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => LessonUpdateWithoutVideosInputObjectSchema),
						z.lazy(() => LessonUncheckedUpdateWithoutVideosInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonUpdateOneRequiredWithoutVideosNestedInputObjectSchema =
	Schema
