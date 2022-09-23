import { z } from 'zod'
import { PatientUpdateWithoutEvolutionsInputObjectSchema } from './PatientUpdateWithoutEvolutionsInput.schema'
import { PatientUncheckedUpdateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedUpdateWithoutEvolutionsInput.schema'
import { PatientCreateWithoutEvolutionsInputObjectSchema } from './PatientCreateWithoutEvolutionsInput.schema'
import { PatientUncheckedCreateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutEvolutionsInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const PatientUpsertWithoutEvolutionsInputObjectSchema = Schema
