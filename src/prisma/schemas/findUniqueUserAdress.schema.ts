import { z } from 'zod'
import { UserAdressWhereUniqueInputObjectSchema } from './objects/UserAdressWhereUniqueInput.schema'

export const UserAdressFindUniqueSchema = z.object({
	where: UserAdressWhereUniqueInputObjectSchema,
})
