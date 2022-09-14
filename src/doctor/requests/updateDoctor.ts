import { User } from '@prisma/client'
import { client } from 'common/client'
import { Response } from 'common/types'
import { UserUpdateInputObjectSchema } from 'prisma/schemas/objects/UserUpdateInput.schema'
import { Merge } from 'type-fest'
import { z } from 'zod'

export type UpdateDoctorRequestData = Merge<
	z.infer<typeof UserUpdateInputObjectSchema>,
	{ id: string }
>

export function updateDoctor({
	id,
	...data
}: UpdateDoctorRequestData): Promise<Response<User>> {
	return client(`users/${id}`, {
		method: 'patch',
		json: data,
	}).json()
}
