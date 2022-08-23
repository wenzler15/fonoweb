import { Specialty } from 'specialty/types'
import { Merge, Simplify } from 'type-fest'

export type Template = {
	id: string
	numericId: number
	doctorId: string
	title: string
	html: string
	type: TemplateType
	isActive: boolean
	specialtyId: string
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export enum TemplateType {
	ANAMNESIS = 'ANAMNESIS',
	EVALUATION = 'EVALUATION',
}

export type TemplateWithSpecialty = Simplify<
	Merge<Template, { specialty: Specialty }>
>
