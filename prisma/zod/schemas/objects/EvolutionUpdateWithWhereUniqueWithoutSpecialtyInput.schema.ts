import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutSpecialtyInputObjectSchema } from './EvolutionUpdateWithoutSpecialtyInput.schema'
import { EvolutionUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedUpdateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpdateWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const EvolutionUpdateWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
