import { Response } from 'anamnesis/types'
import api from 'services'

export function pdfToHtml(file: File): Promise<Response<string>> {
	const formData = new FormData()
	formData.append('file', file)

	return api.request({
		method: 'post',
		url: '/anamnesis/pdf-to-html',
		data: formData,
	})
}
