import { client } from 'common/client'
import { Response } from 'common/types'
import { User } from 'user/types'

export const fetchCurrentUser = (): Promise<Response<User>> =>
	client('/auth/current').json<Response<User>>()
