import { z } from 'zod'
import { DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorPatientInput.schema'
import { PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './PatientCreateNestedOneWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateWithoutAssignedByInput> = z
	.object({
		createdAt: z.date().optional(),
		active: z.boolean().optional(),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
	})
	.strict()

export const DoctorPatientCreateWithoutAssignedByInputObjectSchema = Schema
