import { z } from 'zod'
import { SpecialtyCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateWithoutAnamnesisInput.schema'
import { SpecialtyUncheckedCreateWithoutAnamnesisInputObjectSchema } from './SpecialtyUncheckedCreateWithoutAnamnesisInput.schema'
import { SpecialtyCreateOrConnectWithoutAnamnesisInputObjectSchema } from './SpecialtyCreateOrConnectWithoutAnamnesisInput.schema'
import { SpecialtyUpsertWithoutAnamnesisInputObjectSchema } from './SpecialtyUpsertWithoutAnamnesisInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutAnamnesisInputObjectSchema } from './SpecialtyUpdateWithoutAnamnesisInput.schema'
import { SpecialtyUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutAnamnesisInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutAnamnesisNestedInput> =
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
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutAnamnesisInputObjectSchema)
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
						z.lazy(() => SpecialtyUpdateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutAnamnesisNestedInputObjectSchema =
	Schema
