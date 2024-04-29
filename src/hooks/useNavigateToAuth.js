import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from './useAuth'

export const useNavigateToAuth = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) navigate('/auth')
	}, [isAuth])
}
