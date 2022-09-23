import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionCreateWithoutPatientInputObjectSchema } from './EvolutionCreateWithoutPatientInput.schema'
import { EvolutionUncheckedCreateWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateOrConnectWithoutPatientInput> = z
	.object({
		where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const EvolutionCreateOrConnectWithoutPatientInputObjectSchema = Schema
