import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'
import { PatientUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './PatientUncheckedCreateNestedOneWithoutUserInput.schema'
import { DoctorUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './DoctorUncheckedCreateNestedOneWithoutUserInput.schema'
import { UserAdressUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserAdressUncheckedCreateNestedManyWithoutUserInput.schema'
import { DoctorPatientUncheckedCreateNestedManyWithoutAssignedByInputObjectSchema } from './DoctorPatientUncheckedCreateNestedManyWithoutAssignedByInput.schema'
import { ExerciseUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './ExerciseUncheckedCreateNestedManyWithoutCreatorInput.schema'
import { CourseUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './CourseUncheckedCreateNestedManyWithoutCreatorInput.schema'
import { LessonUncheckedCreateNestedManyWithoutCreatorInputObjectSchema } from './LessonUncheckedCreateNestedManyWithoutCreatorInput.schema'
import { WatchedVideoUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WatchedVideoUncheckedCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutContactsInput> = z
	.object({
		id: z.string().optional(),
		numericId: z.number().optional(),
		socialName: z.string().optional().nullable(),
		email: z.string(),
		name: z.string(),
		gender: z.string().optional().nullable(),
		customGender: z.string().optional().nullable(),
		cpf: z.string().optional().nullable(),
		birthDate: z.date().optional().nullable(),
		password: z.string(),
		type: z.lazy(() => UserTypeSchema).optional(),
		avatar: z.string().optional().nullable(),
		facebookToken: z.string().optional().nullable(),
		passwordResetToken: z.string().optional().nullable(),
		passwordResetExpires: z.date().optional().nullable(),
		isAdmin: z.boolean().optional(),
		isActive: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		deletedAt: z.date().optional().nullable(),
		patientData: z
			.lazy(() => PatientUncheckedCreateNestedOneWithoutUserInputObjectSchema)
			.optional(),
		doctorData: z
			.lazy(() => DoctorUncheckedCreateNestedOneWithoutUserInputObjectSchema)
			.optional(),
		addresses: z
			.lazy(
				() => UserAdressUncheckedCreateNestedManyWithoutUserInputObjectSchema,
			)
			.optional(),
		DoctorPatient: z
			.lazy(
				() =>
					DoctorPatientUncheckedCreateNestedManyWithoutAssignedByInputObjectSchema,
			)
			.optional(),
		exercises: z
			.lazy(
				() => ExerciseUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
			)
			.optional(),
		courses: z
			.lazy(
				() => CourseUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
			)
			.optional(),
		lessons: z
			.lazy(
				() => LessonUncheckedCreateNestedManyWithoutCreatorInputObjectSchema,
			)
			.optional(),
		watched: z
			.lazy(
				() => WatchedVideoUncheckedCreateNestedManyWithoutUserInputObjectSchema,
			)
			.optional(),
	})
	.strict()

export const UserUncheckedCreateWithoutContactsInputObjectSchema = Schema
