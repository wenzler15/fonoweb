import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { createPatient, CreatePatientRequestData } from 'patient/requests'
import { Patient } from 'patient/types'

export function useCreatePatient(
	options?: UseMutationOptions<
		Response<Patient>,
		HTTPError,
		CreatePatientRequestData
	>,
): UseMutationResult<Response<Patient>, HTTPError, CreatePatientRequestData> {
	return useMutation(createPatient, options)
}
