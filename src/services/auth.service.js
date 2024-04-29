import Cookies from 'js-cookie'

import { $axios } from '../api/api'

export const AuthService = {
	auth: async (email, password, type) => {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set('token', data.token)

			return data
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	}
}
