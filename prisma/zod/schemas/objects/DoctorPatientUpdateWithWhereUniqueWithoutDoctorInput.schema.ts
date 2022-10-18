import { z } from 'zod'
import { DoctorPatientWhereUniqueInputObjectSchema } from './DoctorPatientWhereUniqueInput.schema'
import { DoctorPatientUpdateWithoutDoctorInputObjectSchema } from './DoctorPatientUpdateWithoutDoctorInput.schema'
import { DoctorPatientUncheckedUpdateWithoutDoctorInputObjectSchema } from './DoctorPatientUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorPatientUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => DoctorPatientWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => DoctorPatientUpdateWithoutDoctorInputObjectSchema),
				z.lazy(
					() => DoctorPatientUncheckedUpdateWithoutDoctorInputObjectSchema,
				),
			]),
		})
		.strict()

export const DoctorPatientUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
