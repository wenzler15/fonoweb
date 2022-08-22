import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Doctor } from 'doctor/types'

export const fetchDoctors = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<Doctor>> =>
	client('doctors', {
		method: 'get',
		searchParams: {
			size,
			page,
		},
	}).json()
