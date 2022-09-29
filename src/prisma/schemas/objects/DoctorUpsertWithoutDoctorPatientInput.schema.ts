import { z } from 'zod'
import { DoctorUpdateWithoutDoctorPatientInputObjectSchema } from './DoctorUpdateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedUpdateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorPatientInput.schema'
import { DoctorCreateWithoutDoctorPatientInputObjectSchema } from './DoctorCreateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutDoctorPatientInput> = z
	.object({
		update: z.union([
			z.lazy(() => DoctorUpdateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => DoctorUncheckedUpdateWithoutDoctorPatientInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutDoctorPatientInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema),
		]),
	})
	.strict()

export const DoctorUpsertWithoutDoctorPatientInputObjectSchema = Schema
