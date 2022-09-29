import { z } from 'zod'
import { DoctorPatientCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateWithoutAssignedByInput.schema'
import { DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutAssignedByInput.schema'
import { DoctorPatientCreateOrConnectWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateOrConnectWithoutAssignedByInput.schema'
import { DoctorPatientCreateManyAssignedByInputEnvelopeObjectSchema } from './DoctorPatientCreateManyAssignedByInputEnvelope.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateNestedManyWithoutAssignedByInput> =
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
				createMany: z
					.lazy(
						() => DoctorPatientCreateManyAssignedByInputEnvelopeObjectSchema,
					)
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
	])

export const DoctorPatientCreateNestedManyWithoutAssignedByInputObjectSchema =
	Schema
