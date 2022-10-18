import { z } from 'zod'
import { DoctorCreateWithoutUserInputObjectSchema } from './DoctorCreateWithoutUserInput.schema'
import { DoctorUncheckedCreateWithoutUserInputObjectSchema } from './DoctorUncheckedCreateWithoutUserInput.schema'
import { DoctorCreateOrConnectWithoutUserInputObjectSchema } from './DoctorCreateOrConnectWithoutUserInput.schema'
import { DoctorUpsertWithoutUserInputObjectSchema } from './DoctorUpsertWithoutUserInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutUserInputObjectSchema } from './DoctorUpdateWithoutUserInput.schema'
import { DoctorUncheckedUpdateWithoutUserInputObjectSchema } from './DoctorUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneWithoutUserNestedInput> = z.union(
	[
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutUserInputObjectSchema),
						z.lazy(() => DoctorUncheckedCreateWithoutUserInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutUserInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => DoctorUpsertWithoutUserInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				disconnect: z.boolean().optional(),
			})
			.strict(),
		z
			.object({
				delete: z.boolean().optional(),
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
						z.lazy(() => DoctorUpdateWithoutUserInputObjectSchema),
						z.lazy(() => DoctorUncheckedUpdateWithoutUserInputObjectSchema),
					])
					.optional(),
			})
			.strict(),
	],
)

export const DoctorUpdateOneWithoutUserNestedInputObjectSchema = Schema
