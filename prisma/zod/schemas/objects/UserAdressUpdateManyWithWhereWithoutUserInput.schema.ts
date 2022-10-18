import { z } from 'zod'
import { UserAdressScalarWhereInputObjectSchema } from './UserAdressScalarWhereInput.schema'
import { UserAdressUpdateManyMutationInputObjectSchema } from './UserAdressUpdateManyMutationInput.schema'
import { UserAdressUncheckedUpdateManyWithoutAddressesInputObjectSchema } from './UserAdressUncheckedUpdateManyWithoutAddressesInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserAdressUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserAdressScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => UserAdressUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => UserAdressUncheckedUpdateManyWithoutAddressesInputObjectSchema,
				),
			]),
		})
		.strict()

export const UserAdressUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
