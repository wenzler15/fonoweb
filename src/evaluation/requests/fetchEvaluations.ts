import { client } from 'common/client'
import { PaginatedResponse, Pagination } from 'common/types'
import { Evaluation } from 'evaluation/types'

export const fetchEvaluations = ({
  size = 10,
	page,
	...filters
}: Pagination & { specialtyId?: string, patientId?: string }): Promise<
  PaginatedResponse<Evaluation>
> =>
	client('evaluations', {
		method: 'get',
		searchParams: {
			size,
			page,
			...(filters.specialtyId && { specialtyId: filters.specialtyId }),
			...(filters.patientId && { patientId: filters.patientId }),
		},
	}).json()
