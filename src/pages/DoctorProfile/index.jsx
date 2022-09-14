import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAuth } from '../../auth/hooks/useAuth'
import { api } from '../../services'
import { NavBar } from '../../components/navBar'
import TextInput from '../../components/TextInput'

import { ButtonContainer, Card, CardSelector, Container } from './styles'
import { useForm } from 'react-hook-form'
import { FloatingWhatsAppButton } from '../../common/components'

const userCards = [
	{
		isSelected: false,
		number: '**** **** **** 5353',
		expiration_date: '02/25',
	},
	{
		isSelected: true,
		number: '**** **** **** 6453',
		expiration_date: '07/29',
	},
]

const schema = Yup.object({
	name: Yup.string().required('Nome é obrigatório'),
	email: Yup.string().email('Email incorreto').required('Email é obrigatório'),
	cpf: Yup.string().max(11).required('CPF é obrigatório'),
	streetName: Yup.string().required('Rua é obrigatório'),
	houseNumber: Yup.string().required('Número de casa/apt é obrigatório'),
	complement: Yup.string(),
	district: Yup.string().required('Bairro é obrigatório'),
	cep: Yup.string().max(8).required('CEP é obrigatório'),
})

function DoctorProfile() {
	const [isEditing, setIsEditing] = useState(true)

	const navigate = useNavigate()
	const { user, setUser, signOut } = useAuth()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const handleToggleIsEditing = () => setIsEditing(state => !state)

	const handleSubmitUpdate = useCallback(
		async formData => {
			try {
				const { data } = await api.patch(`/users/${user?.id}`, formData)

				if (data?.user) {
					setUser(data?.user)
					localStorage.setItem('@auth/user', JSON.stringify(data.user))
					handleToggleIsEditing()
				}
			} catch {}
		},
		[setUser, user?.id],
	)

	const handleSignOut = useCallback(async () => {
		await signOut()
		navigate('/')
	}, [navigate, signOut])

	return (
		<>
			<NavBar />

			<Container>
				<form onSubmit={handleSubmit(handleSubmitUpdate)}>
					<div>
						<div className="titleContainer">
							<h1>Dados Pessoais</h1>

							<button type="button" onClick={handleToggleIsEditing}>
								Editar
							</button>
						</div>

						<span>
							<TextInput
								disabled={isEditing}
								title="Nome Completo"
								placeholder="Nome completo"
								name="name"
								register={register}
								defaultValue={user.name}
								error={errors?.name}
							/>

							<TextInput
								disabled={isEditing}
								title="Email"
								name="email"
								placeholder="email@exemplo.com"
								defaultValue={user.email}
								register={register}
								error={errors?.email}
							/>
						</span>

						<span>
							<TextInput
								disabled={isEditing}
								title="CPF"
								name="cpf"
								placeholder="000.000.000-00"
								defaultValue={user.cpf}
								error={errors?.cpf}
								maxLength={11}
								register={register}
							/>

							<TextInput
								disabled={isEditing}
								type="file"
								name="file"
								title="Anexar CRFA ou Comprovante da faculdade"
								placeholder="PDF, PNG e JPEG"
								register={register}
							/>
						</span>
					</div>

					<div>
						<div className="titleContainer">
							<h1>
								Endereço de atendimento <b>[opcional]</b>
							</h1>

							<button type="button" onClick={handleToggleIsEditing}>
								Editar
							</button>
						</div>

						<span>
							<TextInput
								disabled={isEditing}
								title="Endereço completo"
								placeholder="Sua rua"
								name="streetName"
								defaultValue={user.streetName}
								error={errors?.streetName}
								register={register}
							/>
							<TextInput
								disabled={isEditing}
								title="Número"
								placeholder="Número da casa"
								name="houseNumber"
								defaultValue={user.houseNumber}
								error={errors?.houseNumber}
								register={register}
							/>
						</span>

						<span>
							<TextInput
								disabled={isEditing}
								title="Bairro"
								placeholder="Seu bairro"
								name="district"
								defaultValue={user.district}
								error={errors?.district}
								register={register}
							/>
							<TextInput
								disabled={isEditing}
								title="Complemento"
								placeholder="Seu complemento"
								name="complement"
								defaultValue={user.complement}
								error={errors?.complement}
								register={register}
							/>
						</span>

						<span>
							<TextInput
								disabled={isEditing}
								title="CEP:"
								placeholder="Seu CEP"
								className="lastChild"
								name="cep"
								defaultValue={user.cep}
								maxLength={8}
								error={errors?.cep}
								register={register}
							/>
						</span>
					</div>

					<div>
						<div className="titleContainer">
							<h1>Cobrança</h1>

							<button type="button" onClick={handleToggleIsEditing}>
								Adicionar nova
							</button>
						</div>

						<div className="CardsContainer">
							{userCards.map((card, index) => (
								<div key={index}>
									<CardSelector
										isSelected={card.isSelected}
										onClick={() => console.log(card)}
									>
										<strong>{card.number}</strong>
									</CardSelector>

									{card.isSelected && (
										<Card>
											<h3>Credit Card</h3>

											<strong>{card.number}</strong>

											<p>
												Exp
												<br />
												{card.expiration_date}
											</p>
										</Card>
									)}
								</div>
							))}
						</div>
					</div>

					<ButtonContainer>
						<button type="submit" disabled={isEditing}>
							Salvar alterações
						</button>

						<button className="logoutButton" onClick={handleSignOut}>
							Sair da conta
						</button>
					</ButtonContainer>
				</form>

				<button className="cancelButton" onClick={() => navigate('/')}>
					Cancelar minha assinatura
				</button>
			</Container>
      
		</>
	)
}

export default DoctorProfile
