import { Patient } from 'patient'
import { Specialty } from 'specialty'
import { User } from 'user/types'

export type Evolution = {
	id: string
	numericId: number
	patientId: string
	doctorId: string
	text: string | null
	title: string | null
	createdAt: string
	comments: string | null
	appointmentDate: string
	updatedAt: string
	deletedAt: string | null
	patient: Patient & {
		user: User
	}
	specialty: Specialty
	exercises: Exercise[]
}

export type Exercise = {
	cuid: string
	title: string
	description: string
	links: string[]
}
