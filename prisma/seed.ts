import { PrismaClient } from '@prisma/client'
import * as user from './seeders/user'
import * as specialty from './seeders/specialty'
import * as patient from './seeders/patient'

const prisma = new PrismaClient()

async function main(): Promise<void> {
	await specialty.run(prisma)
	console.log('--> Specialties seeded!')

	await user.run(prisma)
	console.log('--> Users seeded!')

	await patient.run(prisma)
	console.log('--> Patients seeded!')
}

main()
	.catch(error => console.error(error))
	.finally(() => prisma.$disconnect())
