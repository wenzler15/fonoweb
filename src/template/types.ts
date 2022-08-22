export type Template = {
	id: string
	numericId: number
	doctorId: string
	title: string
	html: string
	isActive: boolean
	createdAt: Date
	updatedAt: Date
	deletedAt: Date | null
}
