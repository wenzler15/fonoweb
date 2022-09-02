import { GenderType } from 'patient'

export function translateGenderType(
	template: GenderType | `${GenderType}`,
) {
	switch (template) {
		case GenderType.MALE:
			return 'Masculino'
		case GenderType.FEMALE:
			return 'Feminino'
		default:
			return 'Unknown'
	}
}
