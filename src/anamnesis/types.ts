import { User } from '@prisma/client'
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
	specialty: Specialty
	doctor: Doctor & {
		specialty: Specialty
		user: User
	}
}

export type Question = {
	question: string
	answers: string
	cuid: string
}
