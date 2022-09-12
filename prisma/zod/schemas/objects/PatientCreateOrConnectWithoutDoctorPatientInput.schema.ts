import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutDoctorPatientInputObjectSchema } from './PatientCreateWithoutDoctorPatientInput.schema'
import { PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './PatientUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutDoctorPatientInput> =
	z
		.object({
			where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => PatientCreateWithoutDoctorPatientInputObjectSchema),
				z.lazy(
					() => PatientUncheckedCreateWithoutDoctorPatientInputObjectSchema,
				),
			]),
		})
		.strict()

export const PatientCreateOrConnectWithoutDoctorPatientInputObjectSchema =
	Schema
