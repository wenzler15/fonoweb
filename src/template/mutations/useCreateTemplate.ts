import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from '@tanstack/react-query'
import { Response } from 'common/types'
import { HTTPError } from 'ky'
import { createTemplate } from 'template/requests'
import { CreateTemplateDto } from 'template/schemas'

export function useCreateTemplate(
	options?: UseMutationOptions<Response<string>, HTTPError, CreateTemplateDto>,
): UseMutationResult<Response<string>, HTTPError, CreateTemplateDto> {
	return useMutation(createTemplate, options)
}
