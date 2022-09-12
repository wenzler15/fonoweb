import { z } from 'zod'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'
import { EvolutionCreateWithoutDoctorInputObjectSchema } from './EvolutionCreateWithoutDoctorInput.schema'
import { EvolutionUncheckedCreateWithoutDoctorInputObjectSchema } from './EvolutionUncheckedCreateWithoutDoctorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateOrConnectWithoutDoctorInput> = z
	.object({
		where: z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => EvolutionCreateWithoutDoctorInputObjectSchema),
			z.lazy(() => EvolutionUncheckedCreateWithoutDoctorInputObjectSchema),
		]),
	})
	.strict()

export const EvolutionCreateOrConnectWithoutDoctorInputObjectSchema = Schema
