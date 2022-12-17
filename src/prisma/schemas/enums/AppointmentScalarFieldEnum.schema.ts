import { z } from 'zod'

export const AppointmentScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'doctorId',
	'patientId',
	'when',
	'end',
	'createdAt',
	'updatedAt',
	'deletedAt',
	'status',
])
