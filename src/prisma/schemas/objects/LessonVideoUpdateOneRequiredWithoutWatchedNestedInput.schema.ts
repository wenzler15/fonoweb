import { z } from 'zod'
import { LessonVideoCreateWithoutWatchedInputObjectSchema } from './LessonVideoCreateWithoutWatchedInput.schema'
import { LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema } from './LessonVideoUncheckedCreateWithoutWatchedInput.schema'
import { LessonVideoCreateOrConnectWithoutWatchedInputObjectSchema } from './LessonVideoCreateOrConnectWithoutWatchedInput.schema'
import { LessonVideoUpsertWithoutWatchedInputObjectSchema } from './LessonVideoUpsertWithoutWatchedInput.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'
import { LessonVideoUpdateWithoutWatchedInputObjectSchema } from './LessonVideoUpdateWithoutWatchedInput.schema'
import { LessonVideoUncheckedUpdateWithoutWatchedInputObjectSchema } from './LessonVideoUncheckedUpdateWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUpdateOneRequiredWithoutWatchedNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonVideoCreateWithoutWatchedInputObjectSchema),
						z.lazy(
							() => LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => LessonVideoCreateOrConnectWithoutWatchedInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => LessonVideoUpsertWithoutWatchedInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.lazy(() => LessonVideoWhereUniqueInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => LessonVideoUpdateWithoutWatchedInputObjectSchema),
						z.lazy(
							() => LessonVideoUncheckedUpdateWithoutWatchedInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonVideoUpdateOneRequiredWithoutWatchedNestedInputObjectSchema =
	Schema
