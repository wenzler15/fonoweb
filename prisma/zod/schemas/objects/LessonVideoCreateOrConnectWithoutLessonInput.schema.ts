import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'
import { LessonVideoCreateWithoutLessonInputObjectSchema } from './LessonVideoCreateWithoutLessonInput.schema'
import { LessonVideoUncheckedCreateWithoutLessonInputObjectSchema } from './LessonVideoUncheckedCreateWithoutLessonInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoCreateOrConnectWithoutLessonInput> = z
	.object({
		where: z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => LessonVideoCreateWithoutLessonInputObjectSchema),
			z.lazy(() => LessonVideoUncheckedCreateWithoutLessonInputObjectSchema),
		]),
	})
	.strict()

export const LessonVideoCreateOrConnectWithoutLessonInputObjectSchema = Schema
