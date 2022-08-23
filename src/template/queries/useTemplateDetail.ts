import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { TemplateWithSpecialty } from 'template/types'
import { Response } from 'common/types'
import { fetchTemplateDetail } from 'template/requests'
import { HTTPError } from 'ky'

export function useTemplateDetail(
	id: string,
): UseQueryResult<Response<TemplateWithSpecialty>, HTTPError> {
	return useQuery(['fetchTemplateDetail', id], () => fetchTemplateDetail(id), {
		keepPreviousData: true,
	})
}
