import Cookies from 'js-cookie'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

export const useCheckToken = () => {
	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		const token = Cookies.get('token')
		if (!token) setIsAuth(false)
		else setIsAuth(true)
	}, [isAuth])
}
