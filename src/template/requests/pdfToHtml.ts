import { Response } from 'common/types'
import { client } from 'common/client'

export type PdfToHtmlResponse = string

export function pdfToHtml(file: File): Promise<Response<PdfToHtmlResponse>> {
	const formData = new FormData()
	formData.append('file', file)

	return client('templates/pdf-to-html', {
		method: 'post',
		body: formData,
	}).json()
}
