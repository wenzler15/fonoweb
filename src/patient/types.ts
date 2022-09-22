import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'
import { Evolution } from 'evolution'

export enum Gender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}

export type Patient = {
	id: string
	numericId: number
	userId: string
	createdAt: string
	updatedAt: string
	deletedAt: string | null
	gender: Gender
}

export type PatientChartInfoProps =
	| { type: 'anamnesis'; data: Anamnesis }
	| { type: 'evaluation'; data: Evaluation }
	| { type: 'evolution'; data: Evolution }
