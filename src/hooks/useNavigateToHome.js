import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from './useAuth'

export const useNavigateToHome = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (isAuth) navigate('/home')
	}, [isAuth])
}
