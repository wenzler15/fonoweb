import { z } from 'zod'
import { AnamnesisCreateWithoutDoctorInputObjectSchema } from './AnamnesisCreateWithoutDoctorInput.schema'
import { AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema } from './AnamnesisUncheckedCreateWithoutDoctorInput.schema'
import { AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema } from './AnamnesisCreateOrConnectWithoutDoctorInput.schema'
import { AnamnesisCreateManyDoctorInputEnvelopeObjectSchema } from './AnamnesisCreateManyDoctorInputEnvelope.schema'
import { AnamnesisWhereUniqueInputObjectSchema } from './AnamnesisWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AnamnesisCreateNestedManyWithoutDoctorInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => AnamnesisCreateWithoutDoctorInputObjectSchema),
						z.lazy(() => AnamnesisCreateWithoutDoctorInputObjectSchema).array(),
						z.lazy(
							() => AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => AnamnesisCreateOrConnectWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => AnamnesisCreateManyDoctorInputEnvelopeObjectSchema)
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

export const AnamnesisCreateNestedManyWithoutDoctorInputObjectSchema = Schema
