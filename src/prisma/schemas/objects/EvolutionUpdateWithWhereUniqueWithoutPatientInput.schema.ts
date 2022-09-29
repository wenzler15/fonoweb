import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutPatientInputObjectSchema } from './EvolutionUpdateWithoutPatientInput.schema'
import { EvolutionUncheckedUpdateWithoutPatientInputObjectSchema } from './EvolutionUncheckedUpdateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpdateWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			data: z.union([
				z.lazy(() => EvolutionUpdateWithoutPatientInputObjectSchema),
				z.lazy(() => EvolutionUncheckedUpdateWithoutPatientInputObjectSchema),
			]),
		})
		.strict()

export const EvolutionUpdateWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
