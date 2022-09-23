import { z } from 'zod'
import { DoctorUpdateWithoutEvolutionsInputObjectSchema } from './DoctorUpdateWithoutEvolutionsInput.schema'
import { DoctorUncheckedUpdateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedUpdateWithoutEvolutionsInput.schema'
import { DoctorCreateWithoutEvolutionsInputObjectSchema } from './DoctorCreateWithoutEvolutionsInput.schema'
import { DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutEvolutionsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const DoctorUpsertWithoutEvolutionsInputObjectSchema = Schema
