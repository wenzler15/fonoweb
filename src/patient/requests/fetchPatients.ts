import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { UserWithPatient } from 'user/types'

export const fetchPatients = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<UserWithPatient>> =>
	client('patients', {
		method: 'get',
		searchParams: { size, page },
	}).json()
