import { api } from 'services'
import { Response } from 'anamnesis/types'

export function activateDoctor(
	doctorId: number,
): Promise<Response<{ doctorId: number }>> {
	return api.request({
		method: 'post',
		url: '/users/doctors/activate',
		data: { doctorId },
	})
}
