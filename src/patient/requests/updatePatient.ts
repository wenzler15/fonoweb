import { client } from 'common/client'
import { Response } from 'common/types'
import { parse } from 'date-fns/fp'
import { Patient } from 'patient'
import { CreatePatientRequestData } from './createPatient'

export function updatePatient({
	id,
	...data
}: Partial<CreatePatientRequestData> & { id: string }): Promise<
	Response<Patient>
> {
	return client(`users/${id}`, {
		method: 'patch',
		json: {
			...data,
			birthDate: parse(new Date(), 'dd/MM/yyyy', data.birthDate),
		},
	}).json()
}
