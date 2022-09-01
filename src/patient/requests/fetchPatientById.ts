import { client } from 'common/client'
import { PaginatedResponse } from 'common/types'
import { Patient } from 'patient'

export const fetchPatientById = (id: string): Promise<PaginatedResponse<Patient>> =>
	client(`patients/${id}`, {
		method: 'get',
	}).json()
