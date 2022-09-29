import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		socialName: z.string().optional().nullable(),
		email: z.string(),
		name: z.string(),
		gender: z.string().optional().nullable(),
		customGender: z.string().optional().nullable(),
		cpf: z.string().optional().nullable(),
		birthDate: z.date().optional().nullable(),
		password: z.string(),
		type: z.lazy(() => UserTypeSchema).optional(),
		avatar: z.string().optional().nullable(),
		facebookToken: z.string().optional().nullable(),
		passwordResetToken: z.string().optional().nullable(),
		passwordResetExpires: z.date().optional().nullable(),
		isAdmin: z.boolean().optional(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
	})
	.strict()

export const UserCreateManyInputObjectSchema = Schema
