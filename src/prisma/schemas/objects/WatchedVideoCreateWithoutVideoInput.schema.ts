import { z } from 'zod'
import { UserCreateNestedOneWithoutWatchedInputObjectSchema } from './UserCreateNestedOneWithoutWatchedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.WatchedVideoCreateWithoutVideoInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutWatchedInputObjectSchema),
	})
	.strict()

export const WatchedVideoCreateWithoutVideoInputObjectSchema = Schema
