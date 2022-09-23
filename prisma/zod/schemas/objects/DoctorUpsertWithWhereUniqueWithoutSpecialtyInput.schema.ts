import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutSpecialtyInputObjectSchema } from './DoctorUpdateWithoutSpecialtyInput.schema'
import { DoctorUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedUpdateWithoutSpecialtyInput.schema'
import { DoctorCreateWithoutSpecialtyInputObjectSchema } from './DoctorCreateWithoutSpecialtyInput.schema'
import { DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const DoctorUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
