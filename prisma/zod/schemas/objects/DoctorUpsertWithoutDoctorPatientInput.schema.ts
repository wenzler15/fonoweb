import { z } from 'zod'
import { DoctorUpdateWithoutDoctorPatientInputObjectSchema } from './DoctorUpdateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorPatientInput.schema'
import { DoctorCreateWithoutDoctorPatientInputObjectSchema } from './DoctorCreateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutDoctorPatientInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutDoctorPatientInputObjectSchema = Schema
