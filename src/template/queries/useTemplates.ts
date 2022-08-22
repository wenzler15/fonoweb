import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Template } from 'template/types'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchTemplates } from 'template/requests'

export function useTemplates(
	pagination: Pagination,
): UseQueryResult<PaginatedResponse<Template>> {
	return useQuery(
		['fetchTemplates', pagination],
		() => fetchTemplates(pagination),
		{
			keepPreviousData: true,
		},
	)
}
