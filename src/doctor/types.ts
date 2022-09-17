import { Specialty } from 'specialty'
import { Merge } from 'type-fest'

export type Availability = {
	dates: number[]
	hours: number[]
}

export type Doctor = {
	id: string
	availability: Availability
	numericId: number
	userId: string
	specialtyId: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export type DoctorWithSpecialty = Merge<Doctor, { specialty: Specialty }>
