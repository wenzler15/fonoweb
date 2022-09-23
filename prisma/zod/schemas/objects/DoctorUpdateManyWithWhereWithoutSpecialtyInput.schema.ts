import { z } from 'zod'
import { DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema'
import { DoctorUpdateManyMutationInputObjectSchema } from './DoctorUpdateManyMutationInput.schema'
import { DoctorUncheckedUpdateManyWithoutDoctorsInputObjectSchema } from './DoctorUncheckedUpdateManyWithoutDoctorsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => DoctorScalarWhereInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const DoctorUpdateManyWithWhereWithoutSpecialtyInputObjectSchema = Schema
