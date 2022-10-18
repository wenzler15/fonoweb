import { z } from 'zod'
import { SpecialtyWhereUniqueInputObjectSchema } from './SpecialtyWhereUniqueInput.schema'
import { SpecialtyCreateWithoutCourseInputObjectSchema } from './SpecialtyCreateWithoutCourseInput.schema'
import { SpecialtyUncheckedCreateWithoutCourseInputObjectSchema } from './SpecialtyUncheckedCreateWithoutCourseInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.SpecialtyCreateOrConnectWithoutCourseInput> = z
	.object({
		where: z.lazy(() => SpecialtyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SpecialtyCreateWithoutCourseInputObjectSchema),
			z.lazy(() => SpecialtyUncheckedCreateWithoutCourseInputObjectSchema),
		]),
	})
	.strict()

export const SpecialtyCreateOrConnectWithoutCourseInputObjectSchema = Schema
