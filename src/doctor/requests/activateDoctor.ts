import { Response } from 'common/types'
import { client } from 'common/client'
import { UserWithDoctor } from 'user/types'

export function activateDoctor(
	doctorId: string,
): Promise<Response<UserWithDoctor>> {
	return client('doctors/activate', {
		method: 'post',
		json: { doctorId },
	}).json()
}
