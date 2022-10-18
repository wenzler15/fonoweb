import { z } from 'zod'
import { UserCreateNestedOneWithoutContactsInputObjectSchema } from './UserCreateNestedOneWithoutContactsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserContactCreateInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		email: z.string().optional().nullable(),
		area: z.string(),
		phone: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		user: z.lazy(() => UserCreateNestedOneWithoutContactsInputObjectSchema),
	})
	.strict()

export const UserContactCreateInputObjectSchema = Schema
