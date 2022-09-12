import { z } from 'zod'
import { SpecialtyCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateWithoutAnamnesisInput.schema'
import { SpecialtyUncheckedCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyUncheckedCreateWithoutAnamnesisInput.schema'
import { SpecialtyCreateOrConnectWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateOrConnectWithoutAnamnesisInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutAnamnesisInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutAnamnesisInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutAnamnesisInputObjectSchema = Schema
