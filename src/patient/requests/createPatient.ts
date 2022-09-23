import { client } from 'common/client'
import { Response } from 'common/types'
import { Patient } from 'patient/types'
import { UserType } from 'user/types'
import { parse } from 'date-fns/fp'

export type CreatePatientRequestData = {
	name: string
	birthDate: Date
	email: string
	doctorId: string
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
}

export function createPatient(
	data: CreatePatientRequestData,
): Promise<Response<Patient>> {
	return client('auth/sign-up', {
		method: 'post',
		json: {
			...data,
			birthDate: parse(new Date(), 'dd/MM/yyyy', data.birthDate),
			type: UserType.PATIENT,
			password: 'patient123',
		},
	}).json()
}
