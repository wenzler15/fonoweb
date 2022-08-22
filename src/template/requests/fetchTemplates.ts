import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Template } from 'template/types'

export const fetchTemplates = ({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<Template>> =>
	client('templates', {
		method: 'get',
		searchParams: { size, page },
	}).json()
