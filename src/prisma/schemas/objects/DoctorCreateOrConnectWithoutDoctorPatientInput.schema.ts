import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutDoctorPatientInputObjectSchema } from './DoctorCreateWithoutDoctorPatientInput.schema'
import { DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutDoctorPatientInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => DoctorCreateWithoutDoctorPatientInputObjectSchema),
				z.lazy(
					() => DoctorUncheckedCreateWithoutDoctorPatientInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorCreateOrConnectWithoutDoctorPatientInputObjectSchema = Schema
