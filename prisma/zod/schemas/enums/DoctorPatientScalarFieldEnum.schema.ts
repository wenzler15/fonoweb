import { z } from 'zod'

export const DoctorPatientScalarFieldEnumSchema = z.enum([
	'doctorId',
	'patientId',
	'assignedById',
	'createdAt',
	'active',
])
