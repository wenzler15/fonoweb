import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientCreateWithoutDoctorInputObjectSchema } from './DoctorPatientCreateWithoutDoctorInput.schema'
import { DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateOrConnectWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => DoctorPatientCreateWithoutDoctorInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedCreateWithoutDoctorInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientCreateOrConnectWithoutDoctorInputObjectSchema = Schema
