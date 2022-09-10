import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { CreatePatientRequestData, updatePatient } from 'patient/requests'
import { Patient } from 'patient/types'

export function useUpdatePatient(
	options?: UseMutationOptions<
		Response<Patient>,
		HTTPError,
		Partial<CreatePatientRequestData> & { id: string }
	>,
): UseMutationResult<
	Response<Patient>,
	HTTPError,
	Partial<CreatePatientRequestData> & { id: string }
> {
	return useMutation<
		Response<Patient>,
		HTTPError,
		Partial<CreatePatientRequestData> & { id: string }
	>(updatePatient, options)
}
