import { z } from 'zod'

export const ExerciseScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'title',
	'description',
	'links',
	'creatorId',
	'createdAt',
	'updatedAt',
])
