import { z } from 'zod'
import { UserTypeSchema } from '../enums/UserType.schema'
import { PatientCreateNestedOneWithoutUserInputObjectSchema } from './PatientCreateNestedOneWithoutUserInput.schema'
import { UserAdressCreateNestedManyWithoutUserInputObjectSchema } from './UserAdressCreateNestedManyWithoutUserInput.schema'
import { UserContactCreateNestedManyWithoutUserInputObjectSchema } from './UserContactCreateNestedManyWithoutUserInput.schema'
import { DoctorPatientCreateNestedManyWithoutAssignedByInputObjectSchema } from './DoctorPatientCreateNestedManyWithoutAssignedByInput.schema'
import { ExerciseCreateNestedManyWithoutCreatorInputObjectSchema } from './ExerciseCreateNestedManyWithoutCreatorInput.schema'
import { CourseCreateNestedManyWithoutCreatorInputObjectSchema } from './CourseCreateNestedManyWithoutCreatorInput.schema'
import { LessonCreateNestedManyWithoutCreatorInputObjectSchema } from './LessonCreateNestedManyWithoutCreatorInput.schema'
import { WatchedVideoCreateNestedManyWithoutUserInputObjectSchema } from './WatchedVideoCreateNestedManyWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserCreateWithoutDoctorDataInput> = z
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
			.lazy(() => PatientCreateNestedOneWithoutUserInputObjectSchema)
			.optional(),
		addresses: z
			.lazy(() => UserAdressCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
		contacts: z
			.lazy(() => UserContactCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
		DoctorPatient: z
			.lazy(
				() => DoctorPatientCreateNestedManyWithoutAssignedByInputObjectSchema,
			)
			.optional(),
		exercises: z
			.lazy(() => ExerciseCreateNestedManyWithoutCreatorInputObjectSchema)
			.optional(),
		courses: z
			.lazy(() => CourseCreateNestedManyWithoutCreatorInputObjectSchema)
			.optional(),
		lessons: z
			.lazy(() => LessonCreateNestedManyWithoutCreatorInputObjectSchema)
			.optional(),
		watched: z
			.lazy(() => WatchedVideoCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
	})
	.strict()

export const UserCreateWithoutDoctorDataInputObjectSchema = Schema
