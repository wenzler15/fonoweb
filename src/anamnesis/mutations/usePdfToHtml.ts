import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { pdfToHtml } from 'anamnesis/requests'
import { Response, ErrorResponse } from 'anamnesis/types'

export function usePdfToHtml(): UseMutationResult<
	Response<string>,
	ErrorResponse,
	File
> {
	return useMutation(pdfToHtml)
}
