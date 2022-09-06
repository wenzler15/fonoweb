import { client } from 'common/client'
import { Response } from 'common/types'
import { Anamnesis, Question } from 'anamnesis/types'

export type CreateAnamnesisRequestData = {
	questions: Question[]
	text: string
	patientId: string
	specialtyId: string
	doctorId: string
}

export function createAnamnesis(
	data: CreateAnamnesisRequestData,
): Promise<Response<Anamnesis>> {
	return client('anamnesis', {
		method: 'post',
		json: data,
	}).json()
}
