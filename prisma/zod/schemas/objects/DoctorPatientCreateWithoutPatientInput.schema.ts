import { z } from 'zod'
import { DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorPatientInput.schema'
import { UserCreateNestedOneWithoutDoctorPatientInputObjectSchema } from './UserCreateNestedOneWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateWithoutPatientInput> = z
	.object({
		createdAt: z.date().optional(),
		active: z.boolean().optional(),
		doctor: z.lazy(
			() => DoctorCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
		assignedBy: z.lazy(
			() => UserCreateNestedOneWithoutDoctorPatientInputObjectSchema,
		),
	})
	.strict()

export const DoctorPatientCreateWithoutPatientInputObjectSchema = Schema
