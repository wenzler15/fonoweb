import { z } from 'zod'
import { UserContactScalarWhereInputObjectSchema } from './UserContactScalarWhereInput.schema'
import { UserContactUpdateManyMutationInputObjectSchema } from './UserContactUpdateManyMutationInput.schema'
import { UserContactUncheckedUpdateManyWithoutContactsInputObjectSchema } from './UserContactUncheckedUpdateManyWithoutContactsInput.schema'

import type { Prisma } from '../../../../node_modules/@prisma/client/.prisma/client'

const Schema: z.ZodType<Prisma.UserContactUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => UserContactScalarWhereInputObjectSchema),
			data: z.union([
				z.lazy(() => UserContactUpdateManyMutationInputObjectSchema),
				z.lazy(
					() => UserContactUncheckedUpdateManyWithoutContactsInputObjectSchema,
				),
			]),
		})
		.strict()

export const UserContactUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
