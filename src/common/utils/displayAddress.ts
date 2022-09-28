import { UserAdress } from '@prisma/client'

export function displayAddress(address: UserAdress) {
	return `${address.streetName}, ${address.number}, ${address.district} ${
		address.complement ? `- ${address.complement}` : ''
	}. ${address.city} - ${address.state}`
}
