import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutEvolutionInputObjectSchema } from './SpecialtyCreateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvolutionInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutEvolutionInput> =
	z
		.object({
			where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
			create: z.any(),
		})
		.strict()

export const SpecialtyCreateOrConnectWithoutEvolutionInputObjectSchema = Schema
