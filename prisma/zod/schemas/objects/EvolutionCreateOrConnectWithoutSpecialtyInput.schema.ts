import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionCreateWithoutSpecialtyInputObjectSchema } from './EvolutionCreateWithoutSpecialtyInput.schema'
import { EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateOrConnectWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			create: z.any(),
		})
		.strict()

export const EvolutionCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
