import { z } from 'zod'
import { LessonVideoCreateWithoutWatchedInputObjectSchema } from './LessonVideoCreateWithoutWatchedInput.schema'
import { LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema } from './LessonVideoUncheckedCreateWithoutWatchedInput.schema'
import { LessonVideoCreateOrConnectWithoutWatchedInputObjectSchema } from './LessonVideoCreateOrConnectWithoutWatchedInput.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoCreateNestedOneWithoutWatchedInput> =
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
				connect: z
					.lazy(() => LessonVideoWhereUniqueInputObjectSchema)
					.optional(),
			})
			.strict(),
	])

export const LessonVideoCreateNestedOneWithoutWatchedInputObjectSchema = Schema
