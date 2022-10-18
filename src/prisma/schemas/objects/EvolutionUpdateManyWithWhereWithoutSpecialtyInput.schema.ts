import { z } from 'zod'
import { EvolutionScalarWhereInputObjectSchema } from './EvolutionScalarWhereInput.schema'
import { EvolutionUpdateManyMutationInputObjectSchema } from './EvolutionUpdateManyMutationInput.schema'
import { EvolutionUncheckedUpdateManyWithoutEvolutionInputObjectSchema } from './EvolutionUncheckedUpdateManyWithoutEvolutionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpdateManyWithWhereWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvolutionScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => EvolutionUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => EvolutionUncheckedUpdateManyWithoutEvolutionInputObjectSchema,
				),
			]),
		})
		.strict()

export const EvolutionUpdateManyWithWhereWithoutSpecialtyInputObjectSchema =
	Schema
