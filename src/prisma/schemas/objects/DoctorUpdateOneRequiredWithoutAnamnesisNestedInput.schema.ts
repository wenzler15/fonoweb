import { z } from 'zod'
import { DoctorCreateWithoutAnamnesisInputObjectSchema } from './DoctorCreateWithoutAnamnesisInput.schema'
import { DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedCreateWithoutAnamnesisInput.schema'
import { DoctorCreateOrConnectWithoutAnamnesisInputObjectSchema } from './DoctorCreateOrConnectWithoutAnamnesisInput.schema'
import { DoctorUpsertWithoutAnamnesisInputObjectSchema } from './DoctorUpsertWithoutAnamnesisInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutAnamnesisInputObjectSchema } from './DoctorUpdateWithoutAnamnesisInput.schema'
import { DoctorUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './DoctorUncheckedUpdateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutAnamnesisNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutAnamnesisInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => DoctorUpsertWithoutAnamnesisInputObjectSchema)
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
						z.lazy(() => DoctorUpdateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedUpdateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUpdateOneRequiredWithoutAnamnesisNestedInputObjectSchema =
	Schema
