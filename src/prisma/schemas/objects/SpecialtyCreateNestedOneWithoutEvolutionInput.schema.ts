import { z } from 'zod'
import { SpecialtyCreateWithoutEvolutionInputObjectSchema } from './SpecialtyCreateWithoutEvolutionInput.schema'
import { SpecialtyUncheckedCreateWithoutEvolutionInputObjectSchema } from './SpecialtyUncheckedCreateWithoutEvolutionInput.schema'
import { SpecialtyCreateOrConnectWithoutEvolutionInputObjectSchema } from './SpecialtyCreateOrConnectWithoutEvolutionInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutEvolutionInput> =
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
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutEvolutionInputObjectSchema = Schema
