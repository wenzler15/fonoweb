import { z } from 'zod'
import { EvolutionCreateWithoutDoctorInputObjectSchema } from './EvolutionCreateWithoutDoctorInput.schema'
import { EvolutionUncheckedCreateWithoutDoctorInputObjectSchema } from './EvolutionUncheckedCreateWithoutDoctorInput.schema'
import { EvolutionCreateOrConnectWithoutDoctorInputObjectSchema } from './EvolutionCreateOrConnectWithoutDoctorInput.schema'
import { EvolutionCreateManyDoctorInputEnvelopeObjectSchema } from './EvolutionCreateManyDoctorInputEnvelope.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateNestedManyWithoutDoctorInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvolutionCreateWithoutDoctorInputObjectSchema),
						z.lazy(() => EvolutionCreateWithoutDoctorInputObjectSchema).array(),
						z.lazy(
							() => EvolutionUncheckedCreateWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionUncheckedCreateWithoutDoctorInputObjectSchema,
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
							() => EvolutionCreateOrConnectWithoutDoctorInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionCreateOrConnectWithoutDoctorInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvolutionCreateManyDoctorInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema),
						z.lazy(() => EvolutionWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const EvolutionCreateNestedManyWithoutDoctorInputObjectSchema = Schema
