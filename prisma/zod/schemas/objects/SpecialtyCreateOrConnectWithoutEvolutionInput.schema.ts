import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutEvolutionInputObjectSchema } from './SpecialtyCreateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvolutionInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutEvolutionInput> =
	z
		.object({
			where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => SpecialtyCreateWithoutEvolutionInputObjectSchema),
				z.lazy(() => SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema),
			]),
		})
		.strict()

export const SpecialtyCreateOrConnectWithoutEvolutionInputObjectSchema = Schema
