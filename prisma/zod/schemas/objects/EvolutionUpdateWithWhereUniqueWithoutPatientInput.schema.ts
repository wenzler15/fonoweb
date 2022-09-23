import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutPatientInputObjectSchema } from './EvolutionUpdateWithoutPatientInput.schema'
import { EvolutionUncheckedUpdateWithoutPatientInputObjectSchema } from './EvolutionUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const EvolutionUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
