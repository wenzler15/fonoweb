import { z } from 'zod'
import { PatientUpdateWithoutEvolutionsInputObjectSchema } from './PatientUpdateWithoutEvolutionsInput.schema'
import { PatientUncheckedUpdateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedUpdateWithoutEvolutionsInput.schema'
import { PatientCreateWithoutEvolutionsInputObjectSchema } from './PatientCreateWithoutEvolutionsInput.schema'
import { PatientUncheckedCreateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpsertWithoutEvolutionsInput> = z
	.object({
		update: z.union([
			z.lazy(() => PatientUpdateWithoutEvolutionsInputObjectSchema),
			z.lazy(() => PatientUncheckedUpdateWithoutEvolutionsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => PatientCreateWithoutEvolutionsInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutEvolutionsInputObjectSchema),
		]),
	})
	.strict()

export const PatientUpsertWithoutEvolutionsInputObjectSchema = Schema
