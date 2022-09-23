import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutPatientInputObjectSchema } from './EvolutionUpdateWithoutPatientInput.schema'
import { EvolutionUncheckedUpdateWithoutPatientInputObjectSchema } from './EvolutionUncheckedUpdateWithoutPatientInput.schema'
import { EvolutionCreateWithoutPatientInputObjectSchema } from './EvolutionCreateWithoutPatientInput.schema'
import { EvolutionUncheckedCreateWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const EvolutionUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
