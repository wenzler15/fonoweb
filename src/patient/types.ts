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
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
  gender: GenderType
}

export type PatientChartInfoProps = {
  data: Anamnesis | Evaluation
  type: 'anamnese' | 'evaluation'
}

