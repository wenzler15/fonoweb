import { z } from 'zod'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserContactCreateManyUserInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		email: z.string().optional().nullable(),
		area: z.string(),
		phone: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const UserContactCreateManyUserInputObjectSchema = Schema
