import { z } from 'zod'
import { UserAdressCreateInputObjectSchema } from './objects/UserAdressCreateInput.schema'

export const UserAdressCreateOneSchema = z.object({
	data: UserAdressCreateInputObjectSchema,
})
