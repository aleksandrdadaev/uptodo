import { $axios } from '../api/api'

export const UserService = {
	getProfile: async () => {
		return $axios.get('/user/profile')
	},
	getUserImage: async () => {
		return $axios.get('/user/image')
	},

	changeName: async name => {
		return $axios.patch('/user/name', {
			name
		})
	},

	changePassword: async body => {
		try {
			const { data } = await $axios.patch('/user/password', {
				...body
			})

			return data
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	}
}
