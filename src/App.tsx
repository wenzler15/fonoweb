import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Routes from './routes'

// import 'react-toastify/dist/ReactToastify.css'
// import './global.css'
import { MasterProvider } from 'context/MasterProvider'
import { ReactElement } from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: true,
			refetchOnWindowFocus: true,
		},
	},
})

function App(): ReactElement {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ToastContainer
					autoClose={5000}
					position="top-right"
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				<MasterProvider>
					<Routes />
				</MasterProvider>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export { App }
