import { z } from 'zod'
import { UserContactCreateManyInputObjectSchema } from './objects/UserContactCreateManyInput.schema'

export const UserContactCreateManySchema = z.object({
	data: UserContactCreateManyInputObjectSchema,
})
