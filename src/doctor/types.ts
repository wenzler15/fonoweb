import { Specialty } from 'specialty'
import { Merge } from 'type-fest'

export type Doctor = {
	id: string
	numericId: number
	userId: string
	specialtyId: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export type DoctorWithSpecialty = Merge<Doctor, { specialty: Specialty }>
