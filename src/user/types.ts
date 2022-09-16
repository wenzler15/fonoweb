import { DoctorWithSpecialty } from 'doctor/types'
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
	isActive: boolean
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export enum UserType {
	PATIENT = 'PATIENT',
	DOCTOR = 'DOCTOR',
}

export type Address = {
  id: string;
  zipCode: string;
	streetName: string;
	district: string;
	number: string;
	city: string;
	state: string;
}

export type UserWithPatient = Merge<User, { patientData: Patient }>
export type UserWithDoctor = Merge<User, { doctorData: DoctorWithSpecialty, addresses: Address[] }>
