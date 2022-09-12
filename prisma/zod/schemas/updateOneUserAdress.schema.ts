import { z } from 'zod'
import { UserAdressUpdateInputObjectSchema } from './objects/UserAdressUpdateInput.schema'
import { UserAdressWhereUniqueInputObjectSchema } from './objects/UserAdressWhereUniqueInput.schema'

export const UserAdressUpdateOneSchema = z.object({
	data: UserAdressUpdateInputObjectSchema,
	where: UserAdressWhereUniqueInputObjectSchema,
})
