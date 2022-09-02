import { client } from 'common/client'
import { Response } from 'common/types'
import { CreatePatientDto } from 'patient/schemas'
import { Patient } from 'patient/types'

export function createPatient(
	data: CreatePatientDto,
): Promise<Response<Patient>> {
	return client('patients', {
		method: 'post',
		json: data,
	}).json()
}
