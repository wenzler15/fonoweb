import Routes from './routes'

import ContextProvider from './context'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: true,
			refetchOnWindowFocus: true,
		},
	},
})

function App() {
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

				<ContextProvider>
					<Routes />
				</ContextProvider>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
