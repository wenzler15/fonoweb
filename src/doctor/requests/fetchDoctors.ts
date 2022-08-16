import { PaginatedResponse, Pagination } from 'anamnesis/types'
import { Doctor } from 'doctor/types'
import { api } from 'services'

export function fetchDoctors({
	size = 10,
	page,
}: Pagination): Promise<PaginatedResponse<Doctor>> {
	return api.request({
		method: 'get',
		url: '/users/doctors',
		params: {
			size,
			page,
		},
	})
}
