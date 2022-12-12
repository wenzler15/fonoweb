import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		streetName: z.literal(true).optional(),
		zipCode: z.literal(true).optional(),
		district: z.literal(true).optional(),
		state: z.literal(true).optional(),
		city: z.literal(true).optional(),
		number: z.literal(true).optional(),
		complement: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		deletedAt: z.literal(true).optional(),
	})
	.strict()

export const UserAdressMaxAggregateInputObjectSchema = Schema
