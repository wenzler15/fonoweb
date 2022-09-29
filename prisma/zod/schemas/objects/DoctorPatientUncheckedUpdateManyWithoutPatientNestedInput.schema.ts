import { z } from 'zod'
import { DoctorPatientCreateWithoutPatientInputObjectSchema } from './DoctorPatientCreateWithoutPatientInput.schema'
import { DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutPatientInput.schema'
import { DoctorPatientCreateOrConnectWithoutPatientInputObjectSchema } from './DoctorPatientCreateOrConnectWithoutPatientInput.schema'
import { DoctorPatientUpsertWithWhereUniqueWithoutPatientInputObjectSchema } from './DoctorPatientUpsertWithWhereUniqueWithoutPatientInput.schema'
import { DoctorPatientCreateManyPatientInputEnvelopeObjectSchema } from './DoctorPatientCreateManyPatientInputEnvelope.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithWhereUniqueWithoutPatientInputObjectSchema } from './DoctorPatientUpdateWithWhereUniqueWithoutPatientInput.schema'
import { DoctorPatientUpdateManyWithWhereWithoutPatientInputObjectSchema } from './DoctorPatientUpdateManyWithWhereWithoutPatientInput.schema'
import { DoctorPatientScalarWhereInputObjectSchema } from './DoctorPatientScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUncheckedUpdateManyWithoutPatientNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorPatientCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => DoctorPatientCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema,
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
							() => DoctorPatientCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientCreateOrConnectWithoutPatientInputObjectSchema,
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
								DoctorPatientUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpsertWithWhereUniqueWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => DoctorPatientCreateManyPatientInputEnvelopeObjectSchema)
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
								DoctorPatientUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpdateWithWhereUniqueWithoutPatientInputObjectSchema,
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
								DoctorPatientUpdateManyWithWhereWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpdateManyWithWhereWithoutPatientInputObjectSchema,
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

export const DoctorPatientUncheckedUpdateManyWithoutPatientNestedInputObjectSchema =
	Schema
