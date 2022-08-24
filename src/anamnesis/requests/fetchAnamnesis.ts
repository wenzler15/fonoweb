import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Anamnesis } from 'anamnesis/types'

export const fetchAnamnesis = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<Anamnesis>> =>
	client('anamnesis', {
		method: 'get',
		searchParams: { size, page },
	}).json()
