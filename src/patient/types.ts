import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'

export enum GenderType {
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
	gender: GenderType
}

export type PatientChartInfoProps =
	| { type: 'anamnesis'; data: Anamnesis }
	| { type: 'evaluation'; data: Evaluation }
