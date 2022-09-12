import { z } from 'zod'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'
import { EnumUserTypeFilterObjectSchema } from './EnumUserTypeFilter.schema'
import { UserTypeSchema } from '../enums/UserType.schema'
import { BoolFilterObjectSchema } from './BoolFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { PatientRelationFilterObjectSchema } from './PatientRelationFilter.schema'
import { PatientWhereInputObjectSchema } from './PatientWhereInput.schema'
import { DoctorRelationFilterObjectSchema } from './DoctorRelationFilter.schema'
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'
import { UserAdressListRelationFilterObjectSchema } from './UserAdressListRelationFilter.schema'
import { UserContactListRelationFilterObjectSchema } from './UserContactListRelationFilter.schema'
import { DoctorPatientListRelationFilterObjectSchema } from './DoctorPatientListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.UserWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserWhereInputObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => UserWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserWhereInputObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		numericId: z
			.union([z.lazy(() => IntFilterObjectSchema), z.number()])
			.optional(),
		email: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		name: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		gender: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		cpf: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		birthDate: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		password: z
			.union([z.lazy(() => StringFilterObjectSchema), z.string()])
			.optional(),
		type: z
			.union([
				z.lazy(() => EnumUserTypeFilterObjectSchema),
				z.lazy(() => UserTypeSchema),
			])
			.optional(),
		avatar: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		facebookToken: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		passwordResetToken: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		passwordResetExpires: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		isAdmin: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		isActive: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
			.optional(),
		deletedAt: z
			.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
			.optional()
			.nullable(),
		patientData: z
			.union([
				z.lazy(() => PatientRelationFilterObjectSchema),
				z.lazy(() => PatientWhereInputObjectSchema),
			])
			.optional()
			.nullable(),
		doctorData: z
			.union([
				z.lazy(() => DoctorRelationFilterObjectSchema),
				z.lazy(() => DoctorWhereInputObjectSchema),
			])
			.optional()
			.nullable(),
		addresses: z
			.lazy(() => UserAdressListRelationFilterObjectSchema)
			.optional(),
		contacts: z
			.lazy(() => UserContactListRelationFilterObjectSchema)
			.optional(),
		DoctorPatient: z
			.lazy(() => DoctorPatientListRelationFilterObjectSchema)
			.optional(),
	})
	.strict()

export const UserWhereInputObjectSchema = Schema
