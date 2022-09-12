import { z } from 'zod'
import { DoctorPatientCreateWithoutDoctorInputObjectSchema } from './DoctorPatientCreateWithoutDoctorInput.schema'
import { DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutDoctorInput.schema'
import { DoctorPatientCreateOrConnectWithoutDoctorInputObjectSchema } from './DoctorPatientCreateOrConnectWithoutDoctorInput.schema'
import { DoctorPatientCreateManyDoctorInputEnvelopeObjectSchema } from './DoctorPatientCreateManyDoctorInputEnvelope.schema'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUncheckedCreateNestedManyWithoutDoctorInput> =
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
				createMany: z
					.lazy(() => DoctorPatientCreateManyDoctorInputEnvelopeObjectSchema)
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

export const DoctorPatientUncheckedCreateNestedManyWithoutDoctorInputObjectSchema =
	Schema
