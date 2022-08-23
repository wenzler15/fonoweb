import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Specialty } from 'specialty/types'

export const fetchSpecialties = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<Specialty>> =>
	client('specialties', {
		method: 'get',
		searchParams: { size, page },
	}).json()
