import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		numericId: z.literal(true).optional(),
		socialName: z.literal(true).optional(),
		email: z.literal(true).optional(),
		name: z.literal(true).optional(),
		gender: z.literal(true).optional(),
		customGender: z.literal(true).optional(),
		cpf: z.literal(true).optional(),
		birthDate: z.literal(true).optional(),
		password: z.literal(true).optional(),
		type: z.literal(true).optional(),
		avatar: z.literal(true).optional(),
		facebookToken: z.literal(true).optional(),
		passwordResetToken: z.literal(true).optional(),
		passwordResetExpires: z.literal(true).optional(),
		isAdmin: z.literal(true).optional(),
		isActive: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		deletedAt: z.literal(true).optional(),
		_all: z.literal(true).optional(),
	})
	.strict()

export const UserCountAggregateInputObjectSchema = Schema
