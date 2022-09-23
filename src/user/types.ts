import { Specialty, User, UserAdress, UserContact } from '@prisma/client'
import { Doctor, DoctorWithSpecialty } from 'doctor/types'
import { Patient } from 'patient/types'
import { Merge, Simplify } from 'type-fest'

export enum UserType {
	PATIENT = 'PATIENT',
	DOCTOR = 'DOCTOR',
}

export type Address = {
	id: string
	zipCode: string
	streetName: string
	district: string
	number: string
	city: string
	state: string
}

export type UserWithDoctor = User & {
	doctorData: Doctor & { specialty: Specialty }
}

export type UserWithPatient = User & {
	patientData: Patient
}

export type UserComplete = Simplify<
	Merge<
		Merge<UserWithDoctor, UserWithPatient>,
		{
			addresses: UserAdress[]
			contacts: UserContact[]
		}
	>
>

export { type User } from '@prisma/client'
