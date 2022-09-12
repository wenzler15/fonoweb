import { z } from 'zod'

export const EvaluationScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'patientId',
	'doctorId',
	'specialtyId',
	'text',
	'title',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
