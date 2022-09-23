import { z } from 'zod'
import { PatientUpdateWithoutDoctorPatientInputObjectSchema } from './PatientUpdateWithoutDoctorPatientInput.schema'
import { PatientUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedUpdateWithoutDoctorPatientInput.schema'
import { PatientCreateWithoutDoctorPatientInputObjectSchema } from './PatientCreateWithoutDoctorPatientInput.schema'
import { PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutDoctorPatientInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const PatientUpsertWithoutDoctorPatientInputObjectSchema = Schema
