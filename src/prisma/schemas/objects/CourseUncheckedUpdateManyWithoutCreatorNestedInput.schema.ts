import { z } from 'zod'
import { CourseCreateWithoutCreatorInputObjectSchema } from './CourseCreateWithoutCreatorInput.schema'
import { CourseUncheckedCreateWithoutCreatorInputObjectSchema } from './CourseUncheckedCreateWithoutCreatorInput.schema'
import { CourseCreateOrConnectWithoutCreatorInputObjectSchema } from './CourseCreateOrConnectWithoutCreatorInput.schema'
import { CourseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema } from './CourseUpsertWithWhereUniqueWithoutCreatorInput.schema'
import { CourseCreateManyCreatorInputEnvelopeObjectSchema } from './CourseCreateManyCreatorInputEnvelope.schema'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema } from './CourseUpdateWithWhereUniqueWithoutCreatorInput.schema'
import { CourseUpdateManyWithWhereWithoutCreatorInputObjectSchema } from './CourseUpdateManyWithWhereWithoutCreatorInput.schema'
import { CourseScalarWhereInputObjectSchema } from './CourseScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUncheckedUpdateManyWithoutCreatorNestedInput> =
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
				upsert: z
					.union([
						z.lazy(
							() => CourseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									CourseUpsertWithWhereUniqueWithoutCreatorInputObjectSchema,
							)
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
				set: z
					.union([
						z.lazy(() => CourseWhereUniqueInputObjectSchema),
						z.lazy(() => CourseWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => CourseWhereUniqueInputObjectSchema),
						z.lazy(() => CourseWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => CourseWhereUniqueInputObjectSchema),
						z.lazy(() => CourseWhereUniqueInputObjectSchema).array(),
					])
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
		z
			.object({
				update: z
					.union([
						z.lazy(
							() => CourseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									CourseUpdateWithWhereUniqueWithoutCreatorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				updateMany: z
					.union([
						z.lazy(
							() => CourseUpdateManyWithWhereWithoutCreatorInputObjectSchema,
						),
						z
							.lazy(
								() => CourseUpdateManyWithWhereWithoutCreatorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				deleteMany: z
					.union([
						z.lazy(() => CourseScalarWhereInputObjectSchema),
						z.lazy(() => CourseScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const CourseUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema =
	Schema
