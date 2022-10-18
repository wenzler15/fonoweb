import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressCreateWithoutUserInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		streetName: z.string(),
		zipCode: z.string(),
		district: z.string(),
		state: z.string(),
		city: z.string(),
		number: z.string(),
		complement: z.string().optional().nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const UserAdressCreateWithoutUserInputObjectSchema = Schema
