import { Patient } from 'patient'
import { Specialty } from 'specialty'
import { User } from 'user/types'

export type Evaluation = {
	id: string
	numericId: number
	patientId: string
	doctorId: string
	text: string | null
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
  patient: Patient & {
    user: User
  }
  specialty: Specialty
  questions?: Question[]
}


export type Question = {
	question: string
	answer: string
  cuid: string
}
