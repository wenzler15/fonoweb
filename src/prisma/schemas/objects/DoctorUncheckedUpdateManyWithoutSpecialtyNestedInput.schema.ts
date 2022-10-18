import { z } from 'zod'
import { DoctorCreateWithoutSpecialtyInputObjectSchema } from './DoctorCreateWithoutSpecialtyInput.schema'
import { DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateWithoutSpecialtyInput.schema'
import { DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema } from './DoctorCreateOrConnectWithoutSpecialtyInput.schema'
import { DoctorUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './DoctorUpsertWithWhereUniqueWithoutSpecialtyInput.schema'
import { DoctorCreateManySpecialtyInputEnvelopeObjectSchema } from './DoctorCreateManySpecialtyInputEnvelope.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema } from './DoctorUpdateWithWhereUniqueWithoutSpecialtyInput.schema'
import { DoctorUpdateManyWithWhereWithoutSpecialtyInputObjectSchema } from './DoctorUpdateManyWithWhereWithoutSpecialtyInput.schema'
import { DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUncheckedUpdateManyWithoutSpecialtyNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutSpecialtyInputObjectSchema),
						z.lazy(() => DoctorCreateWithoutSpecialtyInputObjectSchema).array(),
						z.lazy(
							() => DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema,
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
								DoctorUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => DoctorCreateManySpecialtyInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => DoctorWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => DoctorWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => DoctorWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => DoctorWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
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
								DoctorUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema,
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
							() => DoctorUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorUpdateManyWithWhereWithoutSpecialtyInputObjectSchema,
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
						z.lazy(() => DoctorScalarWhereInputObjectSchema),
						z.lazy(() => DoctorScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUncheckedUpdateManyWithoutSpecialtyNestedInputObjectSchema =
	Schema
