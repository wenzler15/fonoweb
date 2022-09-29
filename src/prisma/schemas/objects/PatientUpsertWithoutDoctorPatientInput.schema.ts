import { z } from 'zod'
import { PatientUpdateWithoutDoctorPatientInputObjectSchema } from './PatientUpdateWithoutDoctorPatientInput.schema'
import { PatientUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedUpdateWithoutDoctorPatientInput.schema'
import { PatientCreateWithoutDoctorPatientInputObjectSchema } from './PatientCreateWithoutDoctorPatientInput.schema'
import { PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutDoctorPatientInput> = z
	.object({
		update: z.union([
			z.lazy(() => PatientUpdateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => PatientUncheckedUpdateWithoutDoctorPatientInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => PatientCreateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema),
		]),
	})
	.strict()

export const PatientUpsertWithoutDoctorPatientInputObjectSchema = Schema
