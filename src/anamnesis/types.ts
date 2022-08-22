export type Anamnesis = {
	id: string
	numericId: number
	patientId: string
	doctorId: string
	questions: Question[]
	text: string | null
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}

export type Question = {
	question: string
	answer: string
}
