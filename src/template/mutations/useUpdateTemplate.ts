import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { updateTemplate, UpdateTemplateRequestData } from 'template/requests'
import { Template } from 'template/types'

export function useUpdateTemplate(
	options?: UseMutationOptions<
		Response<Template>,
		HTTPError,
		Partial<UpdateTemplateRequestData> & { id: string }
	>,
): UseMutationResult<
	Response<Template>,
	HTTPError,
	Partial<UpdateTemplateRequestData> & { id: string }
> {
	return useMutation<
		Response<Template>,
		HTTPError,
		Partial<UpdateTemplateRequestData> & { id: string }
	>(updateTemplate, options)
}
