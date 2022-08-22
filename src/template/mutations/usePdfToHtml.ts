import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { pdfToHtml, PdfToHtmlResponse } from 'template/requests'
import { Response } from 'common/types'
import { HTTPError } from 'ky'

export function usePdfToHtml(): UseMutationResult<
	Response<PdfToHtmlResponse>,
	HTTPError,
	File
> {
	return useMutation(pdfToHtml)
}
