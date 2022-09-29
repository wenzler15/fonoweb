import { z } from 'zod'
import { DoctorUpdateWithoutEvolutionsInputObjectSchema } from './DoctorUpdateWithoutEvolutionsInput.schema'
import { DoctorUncheckedUpdateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedUpdateWithoutEvolutionsInput.schema'
import { DoctorCreateWithoutEvolutionsInputObjectSchema } from './DoctorCreateWithoutEvolutionsInput.schema'
import { DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpsertWithoutEvolutionsInput> = z
	.object({
		update: z.union([
			z.lazy(() => DoctorUpdateWithoutEvolutionsInputObjectSchema),
			z.lazy(() => DoctorUncheckedUpdateWithoutEvolutionsInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DoctorCreateWithoutEvolutionsInputObjectSchema),
			z.lazy(() => DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema),
		]),
	})
	.strict()

export const DoctorUpsertWithoutEvolutionsInputObjectSchema = Schema
