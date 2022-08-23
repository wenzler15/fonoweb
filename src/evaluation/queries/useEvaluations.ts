import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchEvaluations } from 'evaluation/requests'
import { Evaluation } from 'evaluation/types'

export function useEvaluations(
	pagination: Pagination,
): UseQueryResult<PaginatedResponse<Evaluation>> {
	return useQuery(
		['fetchEvaluations', pagination],
		() => fetchEvaluations(pagination),
		{
			keepPreviousData: true,
		},
	)
}
