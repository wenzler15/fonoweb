import { z } from 'zod'
import { SpecialtyUpdateWithoutEvolutionInputObjectSchema } from './SpecialtyUpdateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedUpdateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutEvolutionInput.schema'
import { SpecialtyCreateWithoutEvolutionInputObjectSchema } from './SpecialtyCreateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvolutionInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpsertWithoutEvolutionInput> = z
	.object({
		update: z.union([
			z.lazy(() => SpecialtyUpdateWithoutEvolutionInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedUpdateWithoutEvolutionInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutEvolutionInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyUpsertWithoutEvolutionInputObjectSchema = Schema
