import { Patient } from 'patient/types'
import { Merge } from 'type-fest'

export type User = {
	id: string
	numericId: number
	email: string
	name: string
	gender: string | null
	cpf: string
	birthDate: Date | null
	password: string
	type: UserType
	avatar: string | null
	facebookToken: string | null
	passwordResetToken: string | null
	passwordResetExpires: Date | null
	isAdmin: boolean
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export enum UserType {
	PATIENT = 'PATIENT',
	DOCTOR = 'DOCTOR',
}

export type UserWithPatient = Merge<User, { patientData: Patient }>
