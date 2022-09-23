import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionUpdateWithoutDoctorInputObjectSchema } from './EvolutionUpdateWithoutDoctorInput.schema'
import { EvolutionUncheckedUpdateWithoutDoctorInputObjectSchema } from './EvolutionUncheckedUpdateWithoutDoctorInput.schema'
import { EvolutionCreateWithoutDoctorInputObjectSchema } from './EvolutionCreateWithoutDoctorInput.schema'
import { EvolutionUncheckedCreateWithoutDoctorInputObjectSchema } from './EvolutionUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionUpsertWithWhereUniqueWithoutDoctorInput> =
	z
		.object({
			where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
			update: z.any(),
			create: z.any(),
		})
		.strict()

export const EvolutionUpsertWithWhereUniqueWithoutDoctorInputObjectSchema =
	Schema
