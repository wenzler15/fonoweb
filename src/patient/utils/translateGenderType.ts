import { Gender } from 'patient'

export function translateGenderType(template: string) {
	switch (template) {
		case Gender.MALE:
			return 'Masculino'
		case Gender.FEMALE:
			return 'Feminino'
		default:
			return 'Não informado'
	}
}
