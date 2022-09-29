import { z } from 'zod'
import { DoctorPatientCreateWithoutPatientInputObjectSchema } from './DoctorPatientCreateWithoutPatientInput.schema'
import { DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutPatientInput.schema'
import { DoctorPatientCreateOrConnectWithoutPatientInputObjectSchema } from './DoctorPatientCreateOrConnectWithoutPatientInput.schema'
import { DoctorPatientCreateManyPatientInputEnvelopeObjectSchema } from './DoctorPatientCreateManyPatientInputEnvelope.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUncheckedCreateNestedManyWithoutPatientInput> =
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
				createMany: z
					.lazy(() => DoctorPatientCreateManyPatientInputEnvelopeObjectSchema)
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

export const DoctorPatientUncheckedCreateNestedManyWithoutPatientInputObjectSchema =
	Schema
