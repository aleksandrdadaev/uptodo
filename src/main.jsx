import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import React from 'react'
import ReactDOM from 'react-dom/client'

import AddTask from './components/modals/add-task/AddTask'

import { colors } from './assets/colors/colors-data'
import './assets/styles/global.scss'
import AuthProvider from './providers/AuthProvider'
import Router from './routes/Router'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const color = Cookies.get('color')
if (!color) Cookies.set('color', colors[0])
document.body.style.setProperty('--accent', Cookies.get('color'))

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Router />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
)
