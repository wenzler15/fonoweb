import { z } from 'zod'

export const CourseScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'creatorId',
	'specialtyId',
	'order',
	'title',
	'cover',
	'description',
	'isActive',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
