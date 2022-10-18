import { z } from 'zod'
import { CourseCreateWithoutCreatorInputObjectSchema } from './CourseCreateWithoutCreatorInput.schema'
import { CourseUncheckedCreateWithoutCreatorInputObjectSchema } from './CourseUncheckedCreateWithoutCreatorInput.schema'
import { CourseCreateOrConnectWithoutCreatorInputObjectSchema } from './CourseCreateOrConnectWithoutCreatorInput.schema'
import { CourseCreateManyCreatorInputEnvelopeObjectSchema } from './CourseCreateManyCreatorInputEnvelope.schema'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUncheckedCreateNestedManyWithoutCreatorInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => CourseCreateWithoutCreatorInputObjectSchema),
						z.lazy(() => CourseCreateWithoutCreatorInputObjectSchema).array(),
						z.lazy(() => CourseUncheckedCreateWithoutCreatorInputObjectSchema),
						z
							.lazy(() => CourseUncheckedCreateWithoutCreatorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(() => CourseCreateOrConnectWithoutCreatorInputObjectSchema),
						z
							.lazy(() => CourseCreateOrConnectWithoutCreatorInputObjectSchema)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => CourseCreateManyCreatorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => CourseWhereUniqueInputObjectSchema),
						z.lazy(() => CourseWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const CourseUncheckedCreateNestedManyWithoutCreatorInputObjectSchema =
	Schema
