import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithoutPatientInputObjectSchema } from './DoctorPatientUpdateWithoutPatientInput.schema'
import { DoctorPatientUncheckedUpdateWithoutPatientInputObjectSchema } from './DoctorPatientUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => DoctorPatientUpdateWithoutPatientInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedUpdateWithoutPatientInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
