import { z } from 'zod'
import { LessonWhereUniqueInputObjectSchema } from './LessonWhereUniqueInput.schema'
import { LessonCreateWithoutCreatorInputObjectSchema } from './LessonCreateWithoutCreatorInput.schema'
import { LessonUncheckedCreateWithoutCreatorInputObjectSchema } from './LessonUncheckedCreateWithoutCreatorInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonCreateOrConnectWithoutCreatorInput> = z
	.object({
		where: z.lazy(() => LessonWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => LessonCreateWithoutCreatorInputObjectSchema),
			z.lazy(() => LessonUncheckedCreateWithoutCreatorInputObjectSchema),
		]),
	})
	.strict()

export const LessonCreateOrConnectWithoutCreatorInputObjectSchema = Schema
