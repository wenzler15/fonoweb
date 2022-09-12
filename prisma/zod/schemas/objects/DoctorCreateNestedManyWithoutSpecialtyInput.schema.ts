import { z } from 'zod'
import { DoctorCreateWithoutSpecialtyInputObjectSchema } from './DoctorCreateWithoutSpecialtyInput.schema'
import { DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema } from './DoctorUncheckedCreateWithoutSpecialtyInput.schema'
import { DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema } from './DoctorCreateOrConnectWithoutSpecialtyInput.schema'
import { DoctorCreateManySpecialtyInputEnvelopeObjectSchema } from './DoctorCreateManySpecialtyInputEnvelope.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorCreateNestedManyWithoutSpecialtyInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutSpecialtyInputObjectSchema),
						z.lazy(() => DoctorCreateWithoutSpecialtyInputObjectSchema).array(),
						z.lazy(
							() => DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => DoctorUncheckedCreateWithoutSpecialtyInputObjectSchema,
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
							() => DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema,
						),
						z
							.lazy(
								() => DoctorCreateOrConnectWithoutSpecialtyInputObjectSchema,
							)
							.array(),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				createMany: z
					.lazy(() => DoctorCreateManySpecialtyInputEnvelopeObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z
					.union([
						z.lazy(() => DoctorWhereUniqueInputObjectSchema),
						z.lazy(() => DoctorWhereUniqueInputObjectSchema).array(),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorCreateNestedManyWithoutSpecialtyInputObjectSchema = Schema
