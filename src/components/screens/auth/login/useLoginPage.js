import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../../hooks/useAuth'
import { useNavigateToHome } from '../../../../hooks/useNavigateToHome'

import { AuthService } from '../../../../services/auth.service'

export const useLoginPage = () => {
	useNavigateToHome()

	const { setIsAuth } = useAuth()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'all'
	})

	const { mutate, isLoading, isError, error } = useMutation(
		['login'],
		({ email, password }) => {
			return AuthService.auth(email, password, 'login')
		},

		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
			},
			onError: () => {
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			isLoading,
			navigate,
			handleSubmit,
			onSubmit,
			register,
			errors,
			error,
			isError
		}),
		[errors, isLoading]
	)
}
