import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './objects/UserAdressWhereUniqueInput.schema'

export const UserAdressDeleteOneSchema = z.object({
	where: UserAdressWhereUniqueInputObjectSchema,
})
