import { z } from 'zod'
import { SpecialtyCreateWithoutCourseInputObjectSchema } from './SpecialtyCreateWithoutCourseInput.schema'
import { SpecialtyUncheckedCreateWithoutCourseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutCourseInput.schema'
import { SpecialtyCreateOrConnectWithoutCourseInputObjectSchema } from './SpecialtyCreateOrConnectWithoutCourseInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateNestedOneWithoutCourseInput> =
	z.union([
		z
			.object({
				create: z
					.union([
						z.lazy(() => SpecialtyCreateWithoutCourseInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedCreateWithoutCourseInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
		z
			.object({
				connectOrCreate: z
					.lazy(() => SpecialtyCreateOrConnectWithoutCourseInputObjectSchema)
					.optional(),
			})
			.strict(),
		z
			.object({
				connect: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema).optional(),
			})
			.strict(),
	])

export const SpecialtyCreateNestedOneWithoutCourseInputObjectSchema = Schema
