import { Prisma, UserAddress } from '@prisma/client'
import { client } from 'common/client'
import { Response } from 'common/types'
import { parse } from 'date-fns/fp'
import { Patient } from 'patient'
import { CreatePatientRequestData } from './createPatient'
import { pick } from 'rambda'

export function updatePatient({
	id,
	address,
	...data
}: Partial<CreatePatientRequestData> & { id: string }): Promise<
	Response<Patient>
> {
	return client(`users/${id}`, {
		method: 'patch',
		json: {
			...data,
			birthDate: parse(new Date(), 'dd/MM/yyyy', data.birthDate),
			addresses: {
				create: {
					...pick(
						[
							'city',
							'complement',
							'district',
							'state',
							'streetName',
							'zipCode',
							'number',
						],
						address,
					) as UserAddress,
				},
				delete: [{
					id: address.id,
				}]
			},
		} as Prisma.UserUpdateInput,
	}).json()
}
