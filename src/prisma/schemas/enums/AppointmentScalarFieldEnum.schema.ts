import { z } from 'zod'

export const AppointmentScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'doctorId',
	'patientId',
	'when',
	'createdAt',
	'updatedAt',
	'deletedAt',
	'status',
])
