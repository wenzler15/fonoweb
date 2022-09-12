import { z } from 'zod'

export const PatientScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'userId',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
