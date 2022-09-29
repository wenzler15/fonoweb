import { z } from 'zod'
import { DoctorPatientCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateWithoutAssignedByInput.schema'
import { DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutAssignedByInput.schema'
import { DoctorPatientCreateOrConnectWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateOrConnectWithoutAssignedByInput.schema'
import { DoctorPatientUpsertWithWhereUniqueWithoutAssignedByInputObjectSchema } from './DoctorPatientUpsertWithWhereUniqueWithoutAssignedByInput.schema'
import { DoctorPatientCreateManyAssignedByInputEnvelopeObjectSchema } from './DoctorPatientCreateManyAssignedByInputEnvelope.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithWhereUniqueWithoutAssignedByInputObjectSchema } from './DoctorPatientUpdateWithWhereUniqueWithoutAssignedByInput.schema'
import { DoctorPatientUpdateManyWithWhereWithoutAssignedByInputObjectSchema } from './DoctorPatientUpdateManyWithWhereWithoutAssignedByInput.schema'
import { DoctorPatientScalarWhereInputObjectSchema } from './DoctorPatientScalarWhereInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateManyWithoutAssignedByNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorPatientCreateWithoutAssignedByInputObjectSchema),
						z
							.lazy(() => DoctorPatientCreateWithoutAssignedByInputObjectSchema)
							.array(),
						z.lazy(
							() =>
								DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema,
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
							() =>
								DoctorPatientCreateOrConnectWithoutAssignedByInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientCreateOrConnectWithoutAssignedByInputObjectSchema,
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
								DoctorPatientUpsertWithWhereUniqueWithoutAssignedByInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpsertWithWhereUniqueWithoutAssignedByInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(
						() => DoctorPatientCreateManyAssignedByInputEnvelopeObjectSchema,
					)
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
								DoctorPatientUpdateWithWhereUniqueWithoutAssignedByInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpdateWithWhereUniqueWithoutAssignedByInputObjectSchema,
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
								DoctorPatientUpdateManyWithWhereWithoutAssignedByInputObjectSchema,
						),
						z
							.lazy(
								() =>
									DoctorPatientUpdateManyWithWhereWithoutAssignedByInputObjectSchema,
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

export const DoctorPatientUpdateManyWithoutAssignedByNestedInputObjectSchema =
	Schema
