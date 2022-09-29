import { z } from 'zod'
import { PatientCreateWithoutEvolutionsInputObjectSchema } from './PatientCreateWithoutEvolutionsInput.schema'
import { PatientUncheckedCreateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedCreateWithoutEvolutionsInput.schema'
import { PatientCreateOrConnectWithoutEvolutionsInputObjectSchema } from './PatientCreateOrConnectWithoutEvolutionsInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientCreateNestedOneWithoutEvolutionsInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutEvolutionsInputObjectSchema),
						z.lazy(
							() => PatientUncheckedCreateWithoutEvolutionsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => PatientCreateOrConnectWithoutEvolutionsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const PatientCreateNestedOneWithoutEvolutionsInputObjectSchema = Schema
