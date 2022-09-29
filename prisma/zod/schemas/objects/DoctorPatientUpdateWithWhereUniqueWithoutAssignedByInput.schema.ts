import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithoutAssignedByInputObjectSchema } from './DoctorPatientUpdateWithoutAssignedByInput.schema'
import { DoctorPatientUncheckedUpdateWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedUpdateWithoutAssignedByInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateWithWhereUniqueWithoutAssignedByInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => DoctorPatientUpdateWithoutAssignedByInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedUpdateWithoutAssignedByInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpdateWithWhereUniqueWithoutAssignedByInputObjectSchema =
	Schema
