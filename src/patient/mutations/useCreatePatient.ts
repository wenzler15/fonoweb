import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import {
	createPatient,
} from 'patient/requests'
import { CreatePatientDto } from 'patient/schemas'
import { Patient } from 'patient/types'

export function useCreatePatient(
	options?: UseMutationOptions<
		Response<Patient>,
		HTTPError,
		CreatePatientDto
	>,
): UseMutationResult<
	Response<Patient>,
	HTTPError,
	CreatePatientDto
> {
	return useMutation(createPatient, options)
}
