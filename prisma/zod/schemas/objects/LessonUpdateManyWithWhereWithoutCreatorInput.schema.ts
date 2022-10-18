import { z } from 'zod'
import { LessonScalarWhereInputObjectSchema } from './LessonScalarWhereInput.schema'
import { LessonUpdateManyMutationInputObjectSchema } from './LessonUpdateManyMutationInput.schema'
import { LessonUncheckedUpdateManyWithoutLessonsInputObjectSchema } from './LessonUncheckedUpdateManyWithoutLessonsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonUpdateManyWithWhereWithoutCreatorInput> = z
	.object({
		where: z.lazy(() => LessonScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => LessonUpdateManyMutationInputObjectSchema),
			z.lazy(() => LessonUncheckedUpdateManyWithoutLessonsInputObjectSchema),
		]),
	})
	.strict()

export const LessonUpdateManyWithWhereWithoutCreatorInputObjectSchema = Schema
