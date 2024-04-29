import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../../hooks/useAuth'
import { useNavigateToHome } from '../../../../hooks/useNavigateToHome'

import { AuthService } from '../../../../services/auth.service'

export const useRegisterPage = () => {
	useNavigateToHome()

	const { setIsAuth } = useAuth()
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		getValues
	} = useForm({
		mode: 'all'
	})

	const { mutate, isLoading, isError, error } = useMutation(
		['register'],
		({ email, password }) => {
			return AuthService.auth(email, password, 'register')
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
			getValues,
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
