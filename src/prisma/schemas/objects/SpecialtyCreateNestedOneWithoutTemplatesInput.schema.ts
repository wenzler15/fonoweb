import { z } from 'zod'
import { SpecialtyCreateWithoutTemplatesInputObjectSchema } from './SpecialtyCreateWithoutTemplatesInput.schema'
import { SpecialtyUncheckedCreateWithoutTemplatesInputObjectSchema } from './SpecialtyUncheckedCreateWithoutTemplatesInput.schema'
import { SpecialtyCreateOrConnectWithoutTemplatesInputObjectSchema } from './SpecialtyCreateOrConnectWithoutTemplatesInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutTemplatesInput> =
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
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutTemplatesInputObjectSchema = Schema
