import { z } from 'zod'
import { CourseWhereUniqueInputObjectSchema } from './CourseWhereUniqueInput.schema'
import { CourseCreateWithoutCreatorInputObjectSchema } from './CourseCreateWithoutCreatorInput.schema'
import { CourseUncheckedCreateWithoutCreatorInputObjectSchema } from './CourseUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CourseCreateOrConnectWithoutCreatorInput> = z
	.object({
		where: z.lazy(() => CourseWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => CourseCreateWithoutCreatorInputObjectSchema),
			z.lazy(() => CourseUncheckedCreateWithoutCreatorInputObjectSchema),
		]),
	})
	.strict()

export const CourseCreateOrConnectWithoutCreatorInputObjectSchema = Schema
