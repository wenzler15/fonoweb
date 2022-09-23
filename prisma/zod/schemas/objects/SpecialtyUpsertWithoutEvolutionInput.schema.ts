import { z } from 'zod'
import { SpecialtyUpdateWithoutEvolutionInputObjectSchema } from './SpecialtyUpdateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedUpdateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutEvolutionInput.schema'
import { SpecialtyCreateWithoutEvolutionInputObjectSchema } from './SpecialtyCreateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvolutionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutEvolutionInput> = z
	.object({
		update: z.any(),
		create: z.any(),
	})
	.strict()

export const SpecialtyUpsertWithoutEvolutionInputObjectSchema = Schema
