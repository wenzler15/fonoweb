import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { useAuthStore } from 'auth/providers'
import { client } from 'common/client'
import { Response } from 'common/types'
import { Availability, DoctorWithSpecialty } from 'doctor/types'
import { HTTPError } from 'ky'
import { UserWithDoctor } from 'user/types'

export function useSetAvailability(
	options?: UseMutationOptions<
		Response<DoctorWithSpecialty>,
		HTTPError,
		Availability
	>,
) {
	const user = useAuthStore(state => state.user) as UserWithDoctor

	return useMutation(
		(availability: Availability) =>
			client(`doctors/${user.doctorData.id}`, {
				method: 'PATCH',
				json: { availability },
			}).json<Response<DoctorWithSpecialty>>(),
		options,
	)
}
