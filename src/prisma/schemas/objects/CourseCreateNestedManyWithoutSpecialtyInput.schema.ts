import { z } from 'zod'
import { CourseCreateWithoutSpecialtyInputObjectSchema } from './CourseCreateWithoutSpecialtyInput.schema'
import { CourseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './CourseUncheckedCreateWithoutSpecialtyInput.schema'
import { CourseCreateOrConnectWithoutSpecialtyInputObjectSchema } from './CourseCreateOrConnectWithoutSpecialtyInput.schema'
import { CourseCreateManySpecialtyInputEnvelopeObjectSchema } from './CourseCreateManySpecialtyInputEnvelope.schema'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateNestedManyWithoutSpecialtyInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => CourseCreateWithoutSpecialtyInputObjectSchema),
						z.lazy(() => CourseCreateWithoutSpecialtyInputObjectSchema).array(),
						z.lazy(
							() => CourseUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => CourseUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => CourseCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => CourseCreateOrConnectWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => CourseCreateManySpecialtyInputEnvelopeObjectSchema)
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

export const CourseCreateNestedManyWithoutSpecialtyInputObjectSchema = Schema
