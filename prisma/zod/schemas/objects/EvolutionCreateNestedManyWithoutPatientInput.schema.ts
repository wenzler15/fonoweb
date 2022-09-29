import { z } from 'zod'
import { EvolutionCreateWithoutPatientInputObjectSchema } from './EvolutionCreateWithoutPatientInput.schema'
import { EvolutionUncheckedCreateWithoutPatientInputObjectSchema } from './EvolutionUncheckedCreateWithoutPatientInput.schema'
import { EvolutionCreateOrConnectWithoutPatientInputObjectSchema } from './EvolutionCreateOrConnectWithoutPatientInput.schema'
import { EvolutionCreateManyPatientInputEnvelopeObjectSchema } from './EvolutionCreateManyPatientInputEnvelope.schema'
import { EvolutionWhereUniqueInputObjectSchema } from './EvolutionWhereUniqueInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.EvolutionCreateNestedManyWithoutPatientInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => EvolutionCreateWithoutPatientInputObjectSchema),
						z
							.lazy(() => EvolutionCreateWithoutPatientInputObjectSchema)
							.array(),
						z.lazy(
							() => EvolutionUncheckedCreateWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionUncheckedCreateWithoutPatientInputObjectSchema,
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
							() => EvolutionCreateOrConnectWithoutPatientInputObjectSchema,
						),
						z
							.lazy(
								() => EvolutionCreateOrConnectWithoutPatientInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => EvolutionCreateManyPatientInputEnvelopeObjectSchema)
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

export const EvolutionCreateNestedManyWithoutPatientInputObjectSchema = Schema
