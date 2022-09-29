import { z } from 'zod'
import { EvolutionScalarWhereInputObjectSchema } from './EvolutionScalarWhereInput.schema'
import { EvolutionUpdateManyMutationInputObjectSchema } from './EvolutionUpdateManyMutationInput.schema'
import { EvolutionUncheckedUpdateManyWithoutEvolutionsInputObjectSchema } from './EvolutionUncheckedUpdateManyWithoutEvolutionsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpdateManyWithWhereWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvolutionScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => EvolutionUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => EvolutionUncheckedUpdateManyWithoutEvolutionsInputObjectSchema,
				),
			]),
		})
		.strict()

export const EvolutionUpdateManyWithWhereWithoutPatientInputObjectSchema =
	Schema
