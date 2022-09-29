import { z } from 'zod'
import { SpecialtyCreateWithoutDoctorsInputObjectSchema } from './SpecialtyCreateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedCreateWithoutDoctorsInput.schema'
import { SpecialtyCreateOrConnectWithoutDoctorsInputObjectSchema } from './SpecialtyCreateOrConnectWithoutDoctorsInput.schema'
import { SpecialtyUpsertWithoutDoctorsInputObjectSchema } from './SpecialtyUpsertWithoutDoctorsInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutDoctorsInputObjectSchema } from './SpecialtyUpdateWithoutDoctorsInput.schema'
import { SpecialtyUncheckedUpdateWithoutDoctorsInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutDoctorsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutDoctorsNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutDoctorsInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutDoctorsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutDoctorsInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutDoctorsInputObjectSchema)
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
						z.lazy(() => SpecialtyUpdateWithoutDoctorsInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutDoctorsInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutDoctorsNestedInputObjectSchema =
	Schema
