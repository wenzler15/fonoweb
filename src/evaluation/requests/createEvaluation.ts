import { client } from 'common/client'
import { Response } from 'common/types'
import { CreateEvaluationDto } from 'evaluation/schemas'
import { Evaluation } from 'evaluation/types'
import { Merge, Simplify } from 'type-fest'

export type CreateEvaluationRequestData = Simplify<
	Merge<
		Omit<CreateEvaluationDto, 'patient' | 'specialty'>,
		{
			patientId: string
			specialtyId: string
		}
	>
>

export function createEvaluation(
	data: CreateEvaluationRequestData,
): Promise<Response<Evaluation>> {
	return client('evaluations', {
		method: 'post',
		json: data,
	}).json()
}
