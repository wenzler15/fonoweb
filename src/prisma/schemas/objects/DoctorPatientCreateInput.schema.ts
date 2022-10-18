import { z } from 'zod'
import { DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorPatientInput.schema'
import { PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './PatientCreateNestedOneWithoutDoctorPatientInput.schema'
import { UserCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './UserCreateNestedOneWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateInput> = z
	.object({
		createdAt: z.date().optional(),
		active: z.boolean().optional(),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
		assignedBy: z.lazy(
			() => UserCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
	})
	.strict()

export const DoctorPatientCreateInputObjectSchema = Schema
