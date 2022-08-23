import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { TemplateType, TemplateWithSpecialty } from 'template/types'

export const fetchTemplates = ({
	size = 10,
	page,
	...filters
}: Pagination & { type?: TemplateType; specialtyId?: string }): Promise<
	PaginatedResponse<TemplateWithSpecialty>
> =>
	client('templates', {
		method: 'get',
		searchParams: {
			size,
			page,
			...(filters.type && { type: filters.type }),
			...(filters.specialtyId && { specialtyId: filters.specialtyId }),
		},
	}).json()
