import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { updateTemplate } from 'template/requests'
import { UpdateTemplateDto } from 'template/schemas'
import { Template } from 'template/types'

export function useUpdateTemplate(
	options?: UseMutationOptions<
		Response<Template>,
		HTTPError,
		Partial<UpdateTemplateDto> & { id: string }
	>,
): UseMutationResult<
	Response<Template>,
	HTTPError,
	Partial<UpdateTemplateDto> & { id: string }
> {
	return useMutation<
		Response<Template>,
		HTTPError,
		Partial<UpdateTemplateDto> & { id: string }
	>(updateTemplate, options)
}
