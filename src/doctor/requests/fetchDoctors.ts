import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { UserWithDoctor } from 'user/types'

export const fetchDoctors = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<UserWithDoctor>> =>
	client('doctors', {
		method: 'get',
		searchParams: {
			size,
			page,
			isActive: false,
		},
	}).json()
