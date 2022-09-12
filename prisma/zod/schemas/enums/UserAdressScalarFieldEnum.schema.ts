import { z } from 'zod'

export const UserAdressScalarFieldEnumSchema = z.enum([
	'id',
	'numericId',
	'userId',
	'streetName',
	'zipCode',
	'district',
	'state',
	'city',
	'number',
	'complement',
	'createdAt',
	'updatedAt',
	'deletedAt',
])
