import { Prisma, PrismaClient } from '@prisma/client'

const specialties: Prisma.SpecialtyCreateInput[] = [
	{
		name: 'Audiologia',
	},
	{
		name: 'Linguagem',
	},
	{
		name: 'Motricidade Orofacial',
	},
	{
		name: 'Saúde Coletiva',
	},
	{
		name: 'Voz',
	},
	{
		name: 'Disfagia',
	},
	{
		name: 'Fonoaudiologia Educacional',
	},
	{
		name: 'Gerontologia',
	},
	{
		name: 'Fonoaudiologia Neurofuncional',
	},
	{
		name: 'Fonoaudiologia do Trabalho',
	},
	{
		name: 'Neuropsicologia',
	},
	{
		name: 'Fluência',
	},
	{
		name: 'Perícia Fonoaudiológica',
	},
	{
		name: 'Fonoaudiologia Hospitalar',
	},
]

export async function run(prisma: PrismaClient) {
	for (const specialty of specialties) {
		const exists = await prisma.specialty.findFirst({
			select: { id: true },
			where: { name: specialty.name },
		})

		if (!exists) {
			await prisma.specialty.create({ data: specialty })
		}
	}
}
