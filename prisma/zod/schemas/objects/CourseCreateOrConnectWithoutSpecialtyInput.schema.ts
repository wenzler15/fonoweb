import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseCreateWithoutSpecialtyInputObjectSchema } from './CourseCreateWithoutSpecialtyInput.schema'
import { CourseUncheckedCreateWithoutSpecialtyInputObjectSchema } from './CourseUncheckedCreateWithoutSpecialtyInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateOrConnectWithoutSpecialtyInput> = z
	.object({
		where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => CourseCreateWithoutSpecialtyInputObjectSchema),
			z.lazy(() => CourseUncheckedCreateWithoutSpecialtyInputObjectSchema),
		]),
	})
	.strict()

export const CourseCreateOrConnectWithoutSpecialtyInputObjectSchema = Schema
