import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutPatientInputObjectSchema } from './EvolutionUpdateWithoutPatientInput.schema'
import { EvolutionUncheckedUpdateWithoutPatientInputObjectSchema } from './EvolutionUncheckedUpdateWithoutPatientInput.schema'
import { EvolutionCreateWithoutPatientInputObjectSchema } from './EvolutionCreateWithoutPatientInput.schema'
import { EvolutionUncheckedCreateWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateWithoutPatientInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpsertWithWhereUniqueWithoutPatientInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			update: z.union([
				z.lazy(() => EvolutionUpdateWithoutPatientInputObjectSchema),
				z.lazy(() => EvolutionUncheckedUpdateWithoutPatientInputObjectSchema),
			]),
			create: z.union([
				z.lazy(() => EvolutionCreateWithoutPatientInputObjectSchema),
				z.lazy(() => EvolutionUncheckedCreateWithoutPatientInputObjectSchema),
			]),
		})
		.strict()

export const EvolutionUpsertWithWhereUniqueWithoutPatientInputObjectSchema =
	Schema
