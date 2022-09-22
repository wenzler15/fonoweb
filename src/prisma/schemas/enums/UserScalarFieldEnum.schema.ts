import { z } from 'zod'

export const UserScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'socialName',
	'email',
	'name',
	'gender',
	'customGender',
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
