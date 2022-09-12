import { z } from 'zod'
import { PatientCreateWithoutDoctorPatientInputObjectSchema } from './PatientCreateWithoutDoctorPatientInput.schema'
import { PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedCreateWithoutDoctorPatientInput.schema'
import { PatientCreateOrConnectWithoutDoctorPatientInputObjectSchema } from './PatientCreateOrConnectWithoutDoctorPatientInput.schema'
import { PatientUpsertWithoutDoctorPatientInputObjectSchema } from './PatientUpsertWithoutDoctorPatientInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientUpdateWithoutDoctorPatientInputObjectSchema } from './PatientUpdateWithoutDoctorPatientInput.schema'
import { PatientUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedUpdateWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutDoctorPatientNestedInput> =
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
				upsert: z
					.lazy(() => PatientUpsertWithoutDoctorPatientInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => PatientUpdateWithoutDoctorPatientInputObjectSchema),
						z.lazy(
							() => PatientUncheckedUpdateWithoutDoctorPatientInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const PatientUpdateOneRequiredWithoutDoctorPatientNestedInputObjectSchema =
	Schema
