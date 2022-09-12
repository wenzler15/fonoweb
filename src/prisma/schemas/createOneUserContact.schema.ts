import { z } from 'zod'
import { UserContactCreateInputObjectSchema } from './objects/UserContactCreateInput.schema'

export const UserContactCreateOneSchema = z.object({
	data: UserContactCreateInputObjectSchema,
})
