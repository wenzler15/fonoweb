import { z } from 'zod'

export const LessonVideoScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'lessonId',
	'order',
	'title',
	'video',
	'isActive',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
