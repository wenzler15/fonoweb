import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { TemplateType, TemplateWithSpecialty } from 'template/types'
import { PaginatedResponse, Pagination } from 'common/types'
import { fetchTemplates } from 'template/requests'

export function useTemplates(
	pagination: Pagination & { type?: TemplateType; specialtyId?: string },
): UseQueryResult<PaginatedResponse<TemplateWithSpecialty>> {
	return useQuery(
		['fetchTemplates', pagination],
		() => fetchTemplates(pagination),
		{
			keepPreviousData: true,
		},
	)
}
