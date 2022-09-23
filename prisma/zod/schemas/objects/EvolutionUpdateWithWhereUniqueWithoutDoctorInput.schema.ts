import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutDoctorInputObjectSchema } from './EvolutionUpdateWithoutDoctorInput.schema'
import { EvolutionUncheckedUpdateWithoutDoctorInputObjectSchema } from './EvolutionUncheckedUpdateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpdateWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			data: z.any(),
		})
		.strict()

export const EvolutionUpdateWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
