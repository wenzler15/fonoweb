import { z } from 'zod'
import { DoctorCreateWithoutEvolutionsInputObjectSchema } from './DoctorCreateWithoutEvolutionsInput.schema'
import { DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvolutionsInput.schema'
import { DoctorCreateOrConnectWithoutEvolutionsInputObjectSchema } from './DoctorCreateOrConnectWithoutEvolutionsInput.schema'
import { DoctorUpsertWithoutEvolutionsInputObjectSchema } from './DoctorUpsertWithoutEvolutionsInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutEvolutionsInputObjectSchema } from './DoctorUpdateWithoutEvolutionsInput.schema'
import { DoctorUncheckedUpdateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedUpdateWithoutEvolutionsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutEvolutionsNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutEvolutionsInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutEvolutionsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => DoctorUpsertWithoutEvolutionsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => DoctorUpdateWithoutEvolutionsInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedUpdateWithoutEvolutionsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUpdateOneRequiredWithoutEvolutionsNestedInputObjectSchema =
	Schema
