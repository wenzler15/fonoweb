// import {
// 	useMutation,
// 	UseMutationOptions,
// 	UseMutationResult,
// } from '@tanstack/react-query'
// import { Response } from 'common/types'
// import { HTTPError } from 'ky'
// import {UpdateDoctorRequestData, updateDoctor } from 'doctor/requests'

// export function useUpdateDoctor(
// 	options?: UseMutationOptions<
// 		Response<UpdateDoctorRequestData>,
// 		HTTPError,
// 		Partial<UpdateDoctorRequestData> & { id: string }
// 	>,
// ): UseMutationResult<
// 	Response<UpdateDoctorRequestData>,
// 	HTTPError,
// 	Partial<UpdateDoctorRequestData> & { id: string }
// > {
// 	return useMutation<
// 		Response<UpdateDoctorRequestData>,
// 		HTTPError,
// 		Partial<UpdateDoctorRequestData> & { id: string }
// 	>(updateDoctor, options)
// }

import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
	useQueryClient,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { updateDoctor, UpdateDoctorRequestData } from 'doctor/requests'
import { User } from '@prisma/client'

export function useUpdateDoctor(
	options?: UseMutationOptions<
		Response<User>,
		HTTPError,
		UpdateDoctorRequestData
	>,
): UseMutationResult<Response<User>, HTTPError, UpdateDoctorRequestData> {
	const client = useQueryClient()
	return useMutation(updateDoctor, {
		...options,
		onSuccess: (...args) => {
			options?.onSuccess?.(...args)
			client.invalidateQueries(['fetchExercises'])
		},
	})
}

