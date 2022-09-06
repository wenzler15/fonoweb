import { Doctor } from 'doctor/types'
import { Specialty } from 'specialty'

export type Anamnesis = {
	id: string
	title: string | null
	numericId: number
	patientId: string
	doctorId: string
	questions: Question[]
	text: string | null
	createdAt: string
	updatedAt: string
	deletedAt: string | null
	doctor: Doctor & {
		specialty: Specialty
	}
}

export type Question = {
	question: string
	answers: string
	cuid: string
}
