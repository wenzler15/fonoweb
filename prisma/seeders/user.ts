import { PrismaClient, Prisma, UserType } from '@prisma/client'
import * as cpf from '@fnando/cpf'
import { omit, range } from 'rambda'
import { faker } from '@faker-js/faker'
import { randomItem } from '../../src/common/utils/randomItem'
import { hashSync } from 'bcryptjs'

export async function run(prisma: PrismaClient) {
	const specialties = await prisma.specialty.findMany()

	const doctors: Prisma.UserCreateInput[] = range(1, 11).map(
		(n: number): Prisma.UserCreateInput => ({
			name: faker.name.fullName(),
			email: `doctor.${n}@fonoweb.app.br`,
			cpf: cpf.generate(),
			password: hashSync('fonoweb123'),
			type: UserType.DOCTOR,
			doctorData: {
				create: {
					specialtyId: randomItem(specialties)?.id,
				},
			},
		}),
	)

	for (const doctor of doctors) {
		const exists = await prisma.user.findFirst({
			select: { id: true },
			where: { email: doctor.email },
		})

		if (!exists) {
			await prisma.user.create({ data: doctor })
		} else {
			await prisma.user.update({
				where: { id: exists.id },
				data: omit(['doctorData'], doctor),
			})
		}
	}
}
