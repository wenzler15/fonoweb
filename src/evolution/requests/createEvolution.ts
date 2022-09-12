import { client } from 'common/client'
import { Response } from 'common/types'
import { Evolution } from 'evolution/types'
import { EvolutionCreateInputObjectSchema } from 'prisma/schemas/objects/EvolutionCreateInput.schema'
import { z } from 'zod'

export type CreateEvolutionRequestData = z.infer<
	typeof EvolutionCreateInputObjectSchema
>

export function createEvolution(
	data: CreateEvolutionRequestData,
): Promise<Response<Evolution>> {
	return client('evolutions/create', {
		method: 'post',
		json: data,
	}).json()
}
