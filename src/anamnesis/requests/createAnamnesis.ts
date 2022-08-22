import { client } from 'common/client'
import { Response } from 'common/types'
import { CreateAnamnesisDto } from 'anamnesis/schemas'
import { Anamnesis } from 'anamnesis/types'
import { Merge, Simplify } from 'type-fest'

export type CreateAnamnesisRequestData = Simplify<
	Merge<
		Omit<CreateAnamnesisDto, 'patientId'>,
		{
			patient: { connect: { id: string } }
		}
	>
>

export function createAnamnesis(
	data: CreateAnamnesisRequestData,
): Promise<Response<Anamnesis>> {
	return client('anamnesis', {
		method: 'post',
		json: data,
	}).json()
}
