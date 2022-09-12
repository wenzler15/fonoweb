import { z } from 'zod'

export const AnamnesisScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'patientId',
	'doctorId',
	'specialtyId',
	'questions',
	'title',
	'text',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
