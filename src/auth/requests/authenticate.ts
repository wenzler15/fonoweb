import { client } from 'common/client'
import { Response } from 'common/types'
import { User } from 'user/types'

export type AuthenticateRequestParams = {
	email: string
	password: string
}

export type AuthenticateResponse = {
	token: string
	user: User
}

export const authenticate = async (data: AuthenticateRequestParams) =>
	client('auth/login', {
		method: 'POST',
		json: data,
	}).json<Response<AuthenticateResponse>>()
