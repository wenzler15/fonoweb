import { z } from 'zod'
import { CourseCreateWithoutSpecialtyInputObjectSchema } from './CourseCreateWithoutSpecialtyInput.schema'
import { CourseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './CourseUncheckedCreateWithoutSpecialtyInput.schema'
import { CourseCreateOrConnectWithoutSpecialtyInputObjectSchema } from './CourseCreateOrConnectWithoutSpecialtyInput.schema'
import { CourseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './CourseUpsertWithWhereUniqueWithoutSpecialtyInput.schema'
import { CourseCreateManySpecialtyInputEnvelopeObjectSchema } from './CourseCreateManySpecialtyInputEnvelope.schema'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './CourseUpdateWithWhereUniqueWithoutSpecialtyInput.schema'
import { CourseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema } from './CourseUpdateManyWithWhereWithoutSpecialtyInput.schema'
import { CourseScalarWhereInputObjectSchema } from './CourseScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseUpdateManyWithoutSpecialtyNestedInput> =
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
				upsert: z
					.union([
						z.lazy(
							() =>
								CourseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									CourseUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
							() =>
								CourseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									CourseUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
							() => CourseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									CourseUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
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

export const CourseUpdateManyWithoutSpecialtyNestedInputObjectSchema = Schema
