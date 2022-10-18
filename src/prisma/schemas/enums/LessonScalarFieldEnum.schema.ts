import { z } from 'zod'

export const LessonScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'creatorId',
	'courseId',
	'order',
	'title',
	'description',
	'isActive',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
