import { z } from 'zod'
import { LessonVideoScalarWhereInputObjectSchema } from './LessonVideoScalarWhereInput.schema'
import { LessonVideoUpdateManyMutationInputObjectSchema } from './LessonVideoUpdateManyMutationInput.schema'
import { LessonVideoUncheckedUpdateManyWithoutVideosInputObjectSchema } from './LessonVideoUncheckedUpdateManyWithoutVideosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoUpdateManyWithWhereWithoutLessonInput> =
	z
		.object({
			where: z.lazy(() => LessonVideoScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => LessonVideoUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => LessonVideoUncheckedUpdateManyWithoutVideosInputObjectSchema,
				),
			]),
		})
		.strict()

export const LessonVideoUpdateManyWithWhereWithoutLessonInputObjectSchema =
	Schema
