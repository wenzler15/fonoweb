import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutSpecialtyInputObjectSchema } from './EvolutionUpdateWithoutSpecialtyInput.schema'
import { EvolutionUncheckedUpdateWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedUpdateWithoutSpecialtyInput.schema'
import { EvolutionCreateWithoutSpecialtyInputObjectSchema } from './EvolutionCreateWithoutSpecialtyInput.schema'
import { EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema } from './EvolutionUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpsertWithWhereUniqueWithoutSpecialtyInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => EvolutionUpdateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => EvolutionUncheckedUpdateWithoutSpecialtyInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EvolutionCreateWithoutSpecialtyInputObjectSchema),
				z.lazy(() => EvolutionUncheckedCreateWithoutSpecialtyInputObjectSchema),
			]),
		})
		.strict()

export const EvolutionUpsertWithWhereUniqueWithoutSpecialtyInputObjectSchema =
	Schema
