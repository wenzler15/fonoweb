import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionCreateWithoutSpecialtyInputObjectSchema } from './EvolutionCreateWithoutSpecialtyInput.schema'
import { EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateOrConnectWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => EvolutionCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const EvolutionCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
