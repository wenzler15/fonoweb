import { z } from 'zod'
import { PatientCreateWithoutDoctorPatientInputObjectSchema } from './PatientCreateWithoutDoctorPatientInput.schema'
import { PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedCreateWithoutDoctorPatientInput.schema'
import { PatientCreateOrConnectWithoutDoctorPatientInputObjectSchema } from './PatientCreateOrConnectWithoutDoctorPatientInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateNestedOneWithoutDoctorPatientInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(
						() => PatientCreateOrConnectWithoutDoctorPatientInputObjectSchema,
					)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema =
	Schema
