import { z } from 'zod'
import { PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './PatientCreateNestedOneWithoutDoctorPatientInput.schema'
import { UserCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './UserCreateNestedOneWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateWithoutDoctorInput> = z
	.object({
		createdAt: z.date().optional(),
		active: z.boolean().optional(),
		patient: z.lazy(
			() => PatientCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
		assignedBy: z.lazy(
			() => UserCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
	})
	.strict()

export const DoctorPatientCreateWithoutDoctorInputObjectSchema = Schema
