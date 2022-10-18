import { z } from 'zod'
import { LessonVideoCreateWithoutLessonInputObjectSchema } from './LessonVideoCreateWithoutLessonInput.schema'
import { LessonVideoUncheckedCreateWithoutLessonInputObjectSchema } from './LessonVideoUncheckedCreateWithoutLessonInput.schema'
import { LessonVideoCreateOrConnectWithoutLessonInputObjectSchema } from './LessonVideoCreateOrConnectWithoutLessonInput.schema'
import { LessonVideoCreateManyLessonInputEnvelopeObjectSchema } from './LessonVideoCreateManyLessonInputEnvelope.schema'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUncheckedCreateNestedManyWithoutLessonInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonVideoCreateWithoutLessonInputObjectSchema),
						z
							.lazy(() => LessonVideoCreateWithoutLessonInputObjectSchema)
							.array(),
						z.lazy(
							() => LessonVideoUncheckedCreateWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() => LessonVideoUncheckedCreateWithoutLessonInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(
							() => LessonVideoCreateOrConnectWithoutLessonInputObjectSchema,
						),
						z
							.lazy(
								() => LessonVideoCreateOrConnectWithoutLessonInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => LessonVideoCreateManyLessonInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
						z.lazy(() => LessonVideoWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonVideoUncheckedCreateNestedManyWithoutLessonInputObjectSchema =
	Schema
