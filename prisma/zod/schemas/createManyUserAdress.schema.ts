import { z } from 'zod'
import { UserAdressCreateManyInputObjectSchema } from './objects/UserAdressCreateManyInput.schema'

export const UserAdressCreateManySchema = z.object({
	data: UserAdressCreateManyInputObjectSchema,
})
