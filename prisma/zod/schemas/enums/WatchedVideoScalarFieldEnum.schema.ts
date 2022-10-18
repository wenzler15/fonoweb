import { z } from 'zod'

export const WatchedVideoScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'userId',
	'videoId',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
