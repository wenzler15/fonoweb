import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateWithoutAssignedByInput.schema'
import { DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedCreateWithoutAssignedByInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientCreateOrConnectWithoutAssignedByInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => DoctorPatientCreateWithoutAssignedByInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedCreateWithoutAssignedByInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientCreateOrConnectWithoutAssignedByInputObjectSchema =
	Schema
