import { z } from 'zod'
import { PatientCreateWithoutAnamnesisInputObjectSchema } from './PatientCreateWithoutAnamnesisInput.schema'
import { PatientUncheckedCreateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedCreateWithoutAnamnesisInput.schema'
import { PatientCreateOrConnectWithoutAnamnesisInputObjectSchema } from './PatientCreateOrConnectWithoutAnamnesisInput.schema'
import { PatientUpsertWithoutAnamnesisInputObjectSchema } from './PatientUpsertWithoutAnamnesisInput.schema'
import { PatientWhereUniqueInputObjectSchema } from './PatientWhereUniqueInput.schema'
import { PatientUpdateWithoutAnamnesisInputObjectSchema } from './PatientUpdateWithoutAnamnesisInput.schema'
import { PatientUncheckedUpdateWithoutAnamnesisInputObjectSchema } from './PatientUncheckedUpdateWithoutAnamnesisInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PatientUpdateOneRequiredWithoutAnamnesisNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => PatientCreateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => PatientUncheckedCreateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => PatientCreateOrConnectWithoutAnamnesisInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => PatientUpsertWithoutAnamnesisInputObjectSchema)
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
						z.lazy(() => PatientUpdateWithoutAnamnesisInputObjectSchema),
						z.lazy(
							() => PatientUncheckedUpdateWithoutAnamnesisInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const PatientUpdateOneRequiredWithoutAnamnesisNestedInputObjectSchema =
	Schema
