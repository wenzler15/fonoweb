import { z } from 'zod'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientCreateWithoutEvolutionsInputObjectSchema } from './PatientCreateWithoutEvolutionsInput.schema'
import { PatientUncheckedCreateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedCreateWithoutEvolutionsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateOrConnectWithoutEvolutionsInput> = z
	.object({
		where: z.lazy(() => PatientWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => PatientCreateWithoutEvolutionsInputObjectSchema),
			z.lazy(() => PatientUncheckedCreateWithoutEvolutionsInputObjectSchema),
		]),
	})
	.strict()

export const PatientCreateOrConnectWithoutEvolutionsInputObjectSchema = Schema
