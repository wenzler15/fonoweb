import { z } from 'zod'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorCreateWithoutEvolutionsInputObjectSchema } from './DoctorCreateWithoutEvolutionsInput.schema'
import { DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutEvolutionsInput> = z
	.object({
		where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const DoctorCreateOrConnectWithoutEvolutionsInputObjectSchema = Schema
