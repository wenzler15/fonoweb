import { z } from 'zod'
import { SpecialtyCreateWithoutTemplatesInputObjectSchema } from './SpecialtyCreateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedCreateWithoutTemplatesInput.schema'
import { SpecialtyCreateOrConnectWithoutTemplatesInputObjectSchema } from './SpecialtyCreateOrConnectWithoutTemplatesInput.schema'
import { SpecialtyUpsertWithoutTemplatesInputObjectSchema } from './SpecialtyUpsertWithoutTemplatesInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutTemplatesInputObjectSchema } from './SpecialtyUpdateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedUpdateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutTemplatesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutTemplatesNestedInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutTemplatesInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutTemplatesInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutTemplatesInputObjectSchema)
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
						z.lazy(() => SpecialtyUpdateWithoutTemplatesInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutTemplatesInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutTemplatesNestedInputObjectSchema =
	Schema
