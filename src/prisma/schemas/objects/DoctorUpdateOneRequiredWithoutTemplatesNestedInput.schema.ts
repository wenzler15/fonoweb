import { z } from 'zod'
import { DoctorCreateWithoutTemplatesInputObjectSchema } from './DoctorCreateWithoutTemplatesInput.schema'
import { DoctorUncheckedCreateWithoutTemplatesInputObjectSchema } from './DoctorUncheckedCreateWithoutTemplatesInput.schema'
import { DoctorCreateOrConnectWithoutTemplatesInputObjectSchema } from './DoctorCreateOrConnectWithoutTemplatesInput.schema'
import { DoctorUpsertWithoutTemplatesInputObjectSchema } from './DoctorUpsertWithoutTemplatesInput.schema'
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'
import { DoctorUpdateWithoutTemplatesInputObjectSchema } from './DoctorUpdateWithoutTemplatesInput.schema'
import { DoctorUncheckedUpdateWithoutTemplatesInputObjectSchema } from './DoctorUncheckedUpdateWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutTemplatesNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => DoctorCreateWithoutTemplatesInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedCreateWithoutTemplatesInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => DoctorCreateOrConnectWithoutTemplatesInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => DoctorUpsertWithoutTemplatesInputObjectSchema)
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
						z.lazy(() => DoctorUpdateWithoutTemplatesInputObjectSchema),
						z.lazy(
							() => DoctorUncheckedUpdateWithoutTemplatesInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const DoctorUpdateOneRequiredWithoutTemplatesNestedInputObjectSchema =
	Schema
