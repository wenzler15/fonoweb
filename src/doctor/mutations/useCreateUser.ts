import { client } from 'common/client'
import { Response } from 'common/types'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { UserType } from '@prisma/client'
import { UserWithDoctor } from 'user/types'
import { HTTPError } from 'ky'
import { parse } from 'date-fns/fp'
import { isNil } from 'rambda'
import { dot } from 'dot-object'

function getFormData<
	T extends Record<string, Blob | string | null | undefined>,
>(object: T) {
	const formData = new FormData()

	for (const key of Object.keys(object)) {
		const value = object[key as keyof T]
		if (!isNil(value)) {
			formData.append(key, value)
		}
	}

	return formData
}

export type CreateUserRequestData = {
	email: string
	password: string
	name: string
	type: UserType
	doctorId: string | undefined
	specialtyId: string | undefined
	address:
		| {
				streetName: string
				zipCode: string
				district: string
				state: string
				city: string
				number: string
				complement?: string | undefined
		  }
		| undefined
	gender: string | undefined
	cpf: string | undefined
	birthDate: string | undefined
	avatar: File | undefined
	crfa: File | undefined
}

export function useCreateUser(
	options?: UseMutationOptions<
		Response<UserWithDoctor>,
		HTTPError,
		CreateUserRequestData
	>,
) {
	return useMutation(
		(values: CreateUserRequestData): Promise<Response<UserWithDoctor>> =>
			client('auth/sign-up', {
				method: 'post',
				body: getFormData(
					dot({
						...values,
						birthDate: values.birthDate
							? parse(new Date(), 'dd/MM/yyyy', values.birthDate).toString()
							: undefined,
						type: UserType.DOCTOR,
					}),
				),
			}).json(),
		options,
	)
}
