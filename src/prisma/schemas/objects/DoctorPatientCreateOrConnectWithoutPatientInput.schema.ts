import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientCreateWithoutPatientInputObjectSchema } from './DoctorPatientCreateWithoutPatientInput.schema'
import { DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateOrConnectWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => DoctorPatientCreateWithoutPatientInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedCreateWithoutPatientInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientCreateOrConnectWithoutPatientInputObjectSchema =
	Schema
