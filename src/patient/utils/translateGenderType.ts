import { Gender } from 'patient'

export function translateGenderType(template: Gender | `${Gender}`) {
	switch (template) {
		case Gender.MALE:
			return 'Masculino'
		case Gender.FEMALE:
			return 'Feminino'
		default:
			return 'Unknown'
	}
}
