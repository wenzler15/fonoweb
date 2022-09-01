import { Anamnesis } from 'anamnesis'
import { Evaluation } from 'evaluation'

export type Patient = {
	id: string
	numericId: number
	userId: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export type PatientChartInfoProps = {
  data: Anamnesis | Evaluation
  type: 'anamnese' | 'evaluation'
}
