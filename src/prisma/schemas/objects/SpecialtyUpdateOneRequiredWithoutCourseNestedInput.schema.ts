import { z } from 'zod'
import { SpecialtyCreateWithoutCourseInputObjectSchema } from './SpecialtyCreateWithoutCourseInput.schema'
import { SpecialtyUncheckedCreateWithoutCourseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutCourseInput.schema'
import { SpecialtyCreateOrConnectWithoutCourseInputObjectSchema } from './SpecialtyCreateOrConnectWithoutCourseInput.schema'
import { SpecialtyUpsertWithoutCourseInputObjectSchema } from './SpecialtyUpsertWithoutCourseInput.schema'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyUpdateWithoutCourseInputObjectSchema } from './SpecialtyUpdateWithoutCourseInput.schema'
import { SpecialtyUncheckedUpdateWithoutCourseInputObjectSchema } from './SpecialtyUncheckedUpdateWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyUpdateOneRequiredWithoutCourseNestedInput> =
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
				upsert: z
					.lazy(() => SpecialtyUpsertWithoutCourseInputObjectSchema)
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
						z.lazy(() => SpecialtyUpdateWithoutCourseInputObjectSchema),
						z.lazy(
							() => SpecialtyUncheckedUpdateWithoutCourseInputObjectSchema,
						),
					])
					.optional(),
			})
			.strict(),
	])

export const SpecialtyUpdateOneRequiredWithoutCourseNestedInputObjectSchema =
	Schema
