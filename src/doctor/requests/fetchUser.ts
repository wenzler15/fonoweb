import { client } from 'common/client'
import { UserWithDoctor } from 'user/types'

export const fetchUser = (): Promise<UserWithDoctor> =>
	client('auth/current', {
		method: 'get',
	}).json()
