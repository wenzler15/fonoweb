import { z } from 'zod'

export const TemplateScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'doctorId',
	'type',
	'specialtyId',
	'title',
	'html',
	'isActive',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
