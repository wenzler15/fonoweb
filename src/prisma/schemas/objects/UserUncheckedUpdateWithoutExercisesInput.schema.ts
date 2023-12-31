import { z } from 'zod'
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'
import { UserTypeSchema } from '../enums/UserType.schema'
import { EnumUserTypeFieldUpdateOperationsInputObjectSchema } from './EnumUserTypeFieldUpdateOperationsInput.schema'
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { PatientUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './PatientUncheckedUpdateOneWithoutUserNestedInput.schema'
import { DoctorUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './DoctorUncheckedUpdateOneWithoutUserNestedInput.schema'
import { UserAdressUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserAdressUncheckedUpdateManyWithoutUserNestedInput.schema'
import { UserContactUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserContactUncheckedUpdateManyWithoutUserNestedInput.schema'
import { DoctorPatientUncheckedUpdateManyWithoutAssignedByNestedInputObjectSchema } from './DoctorPatientUncheckedUpdateManyWithoutAssignedByNestedInput.schema'
import { CourseUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './CourseUncheckedUpdateManyWithoutCreatorNestedInput.schema'
import { LessonUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema } from './LessonUncheckedUpdateManyWithoutCreatorNestedInput.schema'
import { WatchedVideoUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './WatchedVideoUncheckedUpdateManyWithoutUserNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutExercisesInput> = z
	.object({
		id: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		numericId: z
			.union([
				z.number(),
				z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		socialName: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		email: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		name: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		gender: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		customGender: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		cpf: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		birthDate: z
			.union([
				z.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		password: z
			.union([
				z.string(),
				z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		type: z
			.union([
				z.lazy(() => UserTypeSchema),
				z.lazy(() => EnumUserTypeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		avatar: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		facebookToken: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		passwordResetToken: z
			.union([
				z.string(),
				z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		passwordResetExpires: z
			.union([
				z.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		isAdmin: z
			.union([
				z.boolean(),
				z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		isActive: z
			.union([
				z.boolean(),
				z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		createdAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		updatedAt: z
			.union([
				z.date(),
				z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional(),
		deletedAt: z
			.union([
				z.date(),
				z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
			])
			.optional()
			.nullable(),
		patientData: z
			.lazy(() => PatientUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
			.optional(),
		doctorData: z
			.lazy(() => DoctorUncheckedUpdateOneWithoutUserNestedInputObjectSchema)
			.optional(),
		addresses: z
			.lazy(
				() => UserAdressUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
			)
			.optional(),
		contacts: z
			.lazy(
				() => UserContactUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
			)
			.optional(),
		DoctorPatient: z
			.lazy(
				() =>
					DoctorPatientUncheckedUpdateManyWithoutAssignedByNestedInputObjectSchema,
			)
			.optional(),
		courses: z
			.lazy(
				() => CourseUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema,
			)
			.optional(),
		lessons: z
			.lazy(
				() => LessonUncheckedUpdateManyWithoutCreatorNestedInputObjectSchema,
			)
			.optional(),
		watched: z
			.lazy(
				() => WatchedVideoUncheckedUpdateManyWithoutUserNestedInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const UserUncheckedUpdateWithoutExercisesInputObjectSchema = Schema
