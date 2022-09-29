import { z } from 'zod'
import { DoctorPatientCreateWithoutDoctorInputObjectSchema } from './DoctorPatientCreateWithoutDoctorInput.schema'
import { DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutDoctorInput.schema'
import { DoctorPatientCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorPatientCreateOrConnectWithoutDoctorInput.schema'
import { DoctorPatientUpsertWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorPatientUpsertWithWhereUniqueWithoutDoctorInput.schema'
import { DoctorPatientCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorPatientCreateManyDoctorInputEnvelope.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithWhereUniqueWithoutDoctorInputObjectSchema } from './DoctorPatientUpdateWithWhereUniqueWithoutDoctorInput.schema'
import { DoctorPatientUpdateManyWithWhereWithoutDoctorInputObjectSchema } from './DoctorPatientUpdateManyWithWhereWithoutDoctorInput.schema'
import { DoctorPatientScalarWhereInputObjectSchema } from './DoctorPatientScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateManyWithoutDoctorNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorPatientCreateWithoutDoctorInputObjectSchema),
						z
							.lazy(() => DoctorPatientCreateWithoutDoctorInputObjectSchema)
							.array(),
						z.lazy(
							() => DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => DoctorPatientCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientCreateOrConnectWithoutDoctorInputObjectSchema,
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
								DoctorPatientUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpsertWithWhereUniqueWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => DoctorPatientCreateManyDoctorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				set: z
					.union([
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z
					.union([
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				delete: z
					.union([
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema).array(),
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
								DoctorPatientUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpdateWithWhereUniqueWithoutDoctorInputObjectSchema,
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
							() =>
								DoctorPatientUpdateManyWithWhereWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpdateManyWithWhereWithoutDoctorInputObjectSchema,
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
						z.lazy(() => DoctorPatientScalarWhereInputObjectSchema),
						z.lazy(() => DoctorPatientScalarWhereInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorPatientUpdateManyWithoutDoctorNestedInputObjectSchema =
	Schema
