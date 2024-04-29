import { $axios } from '../api/api'

export const TaskService = {
	getTasksByDate: async (date, sort) => {
		return $axios.get(`/tasks/${date}/${sort}`)
	},

	isCompleted: async (id, isCompleted) => {
		try {
			await $axios.patch(`/tasks/${id}`, {
				isCompleted
			})
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	},

	createTask: async body => {
		try {
			await $axios.post('/tasks', {
				...body
			})
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	},

	editTask: async (id, body) => {
		try {
			await $axios.put(`/tasks/${id}`, {
				...body
			})
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	},

	deleteTask: async id => {
		try {
			await $axios.delete(`/tasks/${id}`)
		} catch (error) {
			throw new Error(error.response.data.message)
		}
	}
}
