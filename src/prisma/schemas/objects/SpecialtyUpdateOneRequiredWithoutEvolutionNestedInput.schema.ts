import { z } from 'zod'
import { SpecialtyCreateWithoutEvolutionInputObjectSchema } from './SpecialtyCreateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvolutionInput.schema'
import { SpecialtyCreateOrConnectWithoutEvolutionInputObjectSchema } from './SpecialtyCreateOrConnectWithoutEvolutionInput.schema'
import { SpecialtyUpsertWithoutEvolutionInputObjectSchema } from './SpecialtyUpsertWithoutEvolutionInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutEvolutionInputObjectSchema } from './SpecialtyUpdateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedUpdateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutEvolutionInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutEvolutionNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutEvolutionInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutEvolutionInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutEvolutionInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
		z
			.object({
				update: z
					.union([
						z.lazy(() => SpecialtyUpdateWithoutEvolutionInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutEvolutionInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutEvolutionNestedInputObjectSchema =
	Schema
