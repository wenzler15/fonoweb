import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { createTemplate, CreateTemplateRequestData } from 'template/requests'
import { Template } from 'template/types'

export function useCreateTemplate(
	options?: UseMutationOptions<
		Response<Template>,
		HTTPError,
		CreateTemplateRequestData
	>,
): UseMutationResult<Response<Template>, HTTPError, CreateTemplateRequestData> {
	return useMutation(createTemplate, options)
}
