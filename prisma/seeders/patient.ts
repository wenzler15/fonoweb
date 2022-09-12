import { PrismaClient, Prisma, UserType } from '@prisma/client'
import * as cpf from '@fnando/cpf'
import { omit, range } from 'rambda'
import { faker } from '@faker-js/faker'
import { randomItem } from '../../src/common/utils/randomItem'
import { hashSync } from 'bcryptjs'

export async function run(prisma: PrismaClient) {
	const doctors = await prisma.doctor.findMany()

	const patients: Prisma.UserCreateInput[] = range(1, 51).map(
		(n: number): Prisma.UserCreateInput => ({
			name: faker.name.fullName(),
			email: `patient.${n}@fonoweb.app.br`,
			cpf: cpf.generate(),
			password: hashSync('fonoweb123'),
			type: UserType.PATIENT,
			patientData: {
				create: {
					doctorPatient: {
						create: (() => {
							const doctor = randomItem(doctors)
							return {
								doctorId: doctor.id,
								assignedById: doctor.userId,
							}
						})(),
					},
				},
			},
		}),
	)

	for (const patient of patients) {
		const exists = await prisma.user.findFirst({
			where: { email: patient.email },
		})

		if (!exists) {
			await prisma.user.create({ data: patient })
		} else {
			await prisma.user.update({
				where: { id: exists.id },
				data: omit(['patientData'], patient),
			})
		}
	}
}
