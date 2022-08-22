export type Evaluation = {
	id: string
	numericId: number
	patientId: string
	doctorId: string
	text: string | null
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}
