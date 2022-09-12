import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'email',
	'name',
	'gender',
	'cpf',
	'birthDate',
	'password',
	'type',
	'avatar',
	'facebookToken',
	'passwordResetToken',
	'passwordResetExpires',
	'isAdmin',
	'isActive',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
