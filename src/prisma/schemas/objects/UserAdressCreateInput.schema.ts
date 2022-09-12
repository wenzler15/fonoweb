import { z } from 'zod'
import { UserCreateNestedOneWithoutAddressesInputObjectSchema } from './UserCreateNestedOneWithoutAddressesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressCreateInput> = z
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
		user: z.lazy(() => UserCreateNestedOneWithoutAddressesInputObjectSchema),
	})
	.strict()

export const UserAdressCreateInputObjectSchema = Schema
