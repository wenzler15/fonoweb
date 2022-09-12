import { z } from 'zod'

export const DoctorScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'userId',
	'specialtyId',
	'crfa',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
