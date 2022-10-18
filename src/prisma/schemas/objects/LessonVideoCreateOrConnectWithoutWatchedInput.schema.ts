import { z } from 'zod'
import { LessonVideoWhereUniqueInputObjectSchema } from './LessonVideoWhereUniqueInput.schema'
import { LessonVideoCreateWithoutWatchedInputObjectSchema } from './LessonVideoCreateWithoutWatchedInput.schema'
import { LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema } from './LessonVideoUncheckedCreateWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.LessonVideoCreateOrConnectWithoutWatchedInput> =
	z
		.object({
			where: z.lazy(() => LessonVideoWhereUniqueInputObjectSchema),
			create: z.union([
				z.lazy(() => LessonVideoCreateWithoutWatchedInputObjectSchema),
				z.lazy(() => LessonVideoUncheckedCreateWithoutWatchedInputObjectSchema),
			]),
		})
		.strict()

export const LessonVideoCreateOrConnectWithoutWatchedInputObjectSchema = Schema
