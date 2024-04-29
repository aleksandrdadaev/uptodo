import { $axios } from '../api/api'

export const CategoryService = {
	getAll: async () => {
		return $axios.get('/categories')
	},

	createNew: async data => {
		try {
			await $axios.post('/categories', {
				...data
			})
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	}
}
