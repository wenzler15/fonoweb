export type User = {
	role: UserRole
	id: number
	avatar: string
	email: string
	userType: UserType
	password: string
	createdAt: Date
	updatedAt: Date
	facebookToken: string
	passwordResetToken: string
	passwordResetExpires: Date
	paymentMethod: unknown
}

export enum UserRole {
	ADMIN = 'admin',
	NORMAL = 'normal',
}

export enum UserType {
	PATIENT = 1,
	DOCTOR = 2,
}
