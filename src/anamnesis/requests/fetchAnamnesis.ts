import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Anamnesis } from 'anamnesis/types'

export const fetchAnamnesis = ({
	size = 10,
	page,
	...filters
}: Pagination & { specialtyId?: string, patientId?: string }): Promise<
  PaginatedResponse<Anamnesis
>> =>
	client('anamnesis', {
		method: 'get',
		searchParams: {
			size,
			page,
			...(filters.specialtyId && { specialtyId: filters.specialtyId }),
			...(filters.patientId && { patientId: filters.patientId }),
		},
	}).json()
