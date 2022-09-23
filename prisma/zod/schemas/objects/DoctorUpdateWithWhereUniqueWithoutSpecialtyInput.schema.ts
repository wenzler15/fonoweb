import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutSpecialtyInputObjectSchema } from './DoctorUpdateWithoutSpecialtyInput.schema'
import { DoctorUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const DoctorUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
