import { z } from 'zod'

export const EvolutionScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'patientId',
	'doctorId',
	'specialtyId',
	'exercises',
	'text',
	'title',
	'appointmentDate',
	'comments',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
