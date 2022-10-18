import { z } from 'zod'
import { DoctorCreateWithoutEvolutionsInputObjectSchema } from './DoctorCreateWithoutEvolutionsInput.schema'
import { DoctorUncheckedCreateWithoutEvolutionsInputObjectSchema } from './DoctorUncheckedCreateWithoutEvolutionsInput.schema'
import { DoctorCreateOrConnectWithoutEvolutionsInputObjectSchema } from './DoctorCreateOrConnectWithoutEvolutionsInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedOneWithoutEvolutionsInput> =
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
				connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const DoctorCreateNestedOneWithoutEvolutionsInputObjectSchema = Schema
