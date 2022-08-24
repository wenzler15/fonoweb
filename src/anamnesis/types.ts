import { Doctor } from "doctor/types"
import { Specialty } from "specialty"

export type Anamnesis = {
	id: string
	numericId: number
	patientId: string
	doctorId: string
	questions: Question[]
	text: string | null
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
  doctor: Doctor & {
    specialty: Specialty
  }
}

export type Question = {
	question: string
	answer: string
}
