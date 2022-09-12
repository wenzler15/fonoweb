import { z } from 'zod'

export const SpecialtyScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'name',
	'isActive',
	'createdAt',
	'updatedAt',
])
