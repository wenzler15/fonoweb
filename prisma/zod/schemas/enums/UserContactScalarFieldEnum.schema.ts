import { z } from 'zod'

export const UserContactScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'userId',
	'email',
	'area',
	'phone',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
