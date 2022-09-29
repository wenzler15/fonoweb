import { z } from 'zod'
import { DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema'
import { DoctorUpdateManyMutationInputObjectSchema } from './DoctorUpdateManyMutationInput.schema'
import { DoctorUncheckedUpdateManyWithoutDoctorsInputObjectSchema } from './DoctorUncheckedUpdateManyWithoutDoctorsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => DoctorScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => DoctorUpdateManyMutationInputObjectSchema),
				z.lazy(() => DoctorUncheckedUpdateManyWithoutDoctorsInputObjectSchema),
			]),
		})
		.strict()

export const DoctorUpdateManyWithWhereWithoutSpecialtyInputObjectSchema = Schema
