import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutEvolutionsInputObjectSchema } from './PatientCreateWithoutEvolutionsInput.schema'
import { PatientUncheckedCreateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutEvolutionsInput> = z
	.object({
		where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
		create: z.any(),
	})
	.strict()

export const PatientCreateOrConnectWithoutEvolutionsInputObjectSchema = Schema
