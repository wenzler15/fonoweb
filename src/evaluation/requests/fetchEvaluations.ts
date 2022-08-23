import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Evaluation } from 'evaluation/types'

export const fetchEvaluations = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<Evaluation>> =>
	client('evaluations', {
		method: 'get',
		searchParams: { size, page },
	}).json()
