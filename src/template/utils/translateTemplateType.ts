import { TemplateType } from 'template/types'

export function translateTemplateType(
	template: TemplateType | `${TemplateType}`,
) {
	switch (template) {
		case TemplateType.ANAMNESIS:
			return 'Anamnese'
		case TemplateType.EVALUATION:
			return 'Avaliação'
		default:
			return 'Unknown'
	}
}
