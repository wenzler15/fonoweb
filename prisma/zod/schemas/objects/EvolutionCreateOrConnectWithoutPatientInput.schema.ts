import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionCreateWithoutPatientInputObjectSchema } from './EvolutionCreateWithoutPatientInput.schema'
import { EvolutionUncheckedCreateWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateOrConnectWithoutPatientInput> = z
	.object({
		where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EvolutionCreateWithoutPatientInputObjectSchema),
			z.lazy(() => EvolutionUncheckedCreateWithoutPatientInputObjectSchema),
		]),
	})
	.strict()

export const EvolutionCreateOrConnectWithoutPatientInputObjectSchema = Schema
