import { z } from 'zod'
import { AnamnesisCreateWithoutPatientInputObjectSchema } from './AnamnesisCreateWithoutPatientInput.schema'
import { AnamnesisUncheckedCreateWithoutPatientInputObjectSchema } from './AnamnesisUncheckedCreateWithoutPatientInput.schema'
import { AnamnesisCreateOrConnectWithoutPatientInputObjectSchema } from './AnamnesisCreateOrConnectWithoutPatientInput.schema'
import { AnamnesisCreateManyPatientInputEnvelopeObjectSchema } from './AnamnesisCreateManyPatientInputEnvelope.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateNestedManyWithoutPatientInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AnamnesisCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => AnamnesisCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => AnamnesisUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisUncheckedCreateWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.union([
						z.lazy(
							() => AnamnesisCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisCreateOrConnectWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AnamnesisCreateManyPatientInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema),
						z.lazy(() => AnamnesisWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const AnamnesisCreateNestedManyWithoutPatientInputObjectSchema = Schema
