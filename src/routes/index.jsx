import { Routes, Route } from 'react-router-dom'

import { RequireAuth } from './RequireAuth'

import DoctorLogin from '../pages/DoctorLogin/DoctorLogin'
import DoctorRegister from '../pages/DoctorRegister'
import Home from '../pages/Home'

import { DOCTOR_ROUTES } from '../doctor'
import { TEMPLATE_ROUTES } from '../template'
import { ANAMNESIS_ROUTES } from '../anamnesis'
import { PATIENT_ROUTES } from '../patient'
import { EVALUATION_ROUTES } from '../evaluation'
import { EVOLUTION_ROUTES } from '../evolution'
import { EXERCISE_ROUTES } from '../exercise'
import { AUTH_ROUTES } from '../auth'
import { COURSE_ROUTES } from '../course'

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<DoctorLogin />} />
			<Route path="/register" element={<DoctorRegister />} />
			{[
				DOCTOR_ROUTES,
				TEMPLATE_ROUTES,
				ANAMNESIS_ROUTES,
				PATIENT_ROUTES,
				EVALUATION_ROUTES,
				EVOLUTION_ROUTES,
				EXERCISE_ROUTES,
				AUTH_ROUTES,
				COURSE_ROUTES,
			]
				.flat()
				.map(({ element: Element, auth, ...route }) => (
					<Route
						key={route.path}
						path={route.path}
						element={
							auth ? (
								<RequireAuth>
									<Element />
								</RequireAuth>
							) : (
								<Element />
							)
						}
					/>
				))}
		</Routes>
	)
}

export default AppRoutes
