import { client } from 'common/client'
import { Response } from 'common/types'
import { Patient } from 'patient'
import { CreatePatientRequestData } from './createPatient'

export function updatePatient({
	id,
	...data
}: Partial<CreatePatientRequestData> & { id: string }): Promise<
	Response<Patient>
> {
	return client(`patients/${id}`, {
		method: 'patch',
		json: data,
	}).json()
}
