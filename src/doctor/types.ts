import { Specialty } from 'specialty'
import { Merge } from 'type-fest'
import { User as PrismaUser, UserAddresses as PrismaUserAddresses } from '@prisma/client'

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

export type DoctorUpdate = Merge<
  PrismaUser,
	PrismaUserAddresses
>


export type DoctorWithSpecialty = Merge<Doctor, { specialty: Specialty }>
