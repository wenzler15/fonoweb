import { z } from 'zod'
import { PatientCreateWithoutEvolutionsInputObjectSchema } from './PatientCreateWithoutEvolutionsInput.schema'
import { PatientUncheckedCreateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedCreateWithoutEvolutionsInput.schema'
import { PatientCreateOrConnectWithoutEvolutionsInputObjectSchema } from './PatientCreateOrConnectWithoutEvolutionsInput.schema'
import { PatientUpsertWithoutEvolutionsInputObjectSchema } from './PatientUpsertWithoutEvolutionsInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientUpdateWithoutEvolutionsInputObjectSchema } from './PatientUpdateWithoutEvolutionsInput.schema'
import { PatientUncheckedUpdateWithoutEvolutionsInputObjectSchema } from './PatientUncheckedUpdateWithoutEvolutionsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutEvolutionsNestedInput> =
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
				upsert: z
					.lazy(() => PatientUpsertWithoutEvolutionsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => PatientWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => PatientUpdateWithoutEvolutionsInputObjectSchema),
						z.lazy(
							() => PatientUncheckedUpdateWithoutEvolutionsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const PatientUpdateOneRequiredWithoutEvolutionsNestedInputObjectSchema =
	Schema
