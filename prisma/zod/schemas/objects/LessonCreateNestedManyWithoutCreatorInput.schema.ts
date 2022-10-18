import { z } from 'zod'
import { LessonCreateWithoutCreatorInputObjectSchema } from './LessonCreateWithoutCreatorInput.schema'
import { LessonUncheckedCreateWithoutCreatorInputObjectSchema } from './LessonUncheckedCreateWithoutCreatorInput.schema'
import { LessonCreateOrConnectWithoutCreatorInputObjectSchema } from './LessonCreateOrConnectWithoutCreatorInput.schema'
import { LessonCreateManyCreatorInputEnvelopeObjectSchema } from './LessonCreateManyCreatorInputEnvelope.schema'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateNestedManyWithoutCreatorInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => LessonCreateWithoutCreatorInputObjectSchema),
						z.lazy(() => LessonCreateWithoutCreatorInputObjectSchema).array(),
						z.lazy(() => LessonUncheckedCreateWithoutCreatorInputObjectSchema),
						z
							.lazy(() => LessonUncheckedCreateWithoutCreatorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => LessonCreateOrConnectWithoutCreatorInputObjectSchema),
						z
							.lazy(() => LessonCreateOrConnectWithoutCreatorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => LessonCreateManyCreatorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => LessonWhereUniqueInputObjectSchema),
						z.lazy(() => LessonWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const LessonCreateNestedManyWithoutCreatorInputObjectSchema = Schema
