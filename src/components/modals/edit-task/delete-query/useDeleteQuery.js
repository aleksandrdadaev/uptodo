import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { TaskService } from '../../../../services/task.service'

export const useDeleteQuery = (id, close, date, sort) => {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		['delete task'],
		() => TaskService.deleteTask(id),
		{
			onSuccess: () => {
				queryClient.invalidateQueries([`get tasks ${date} ${sort}`])
				close()
			}
		}
	)

	return useMemo(
		() => ({
			mutate,
			isLoading
		}),
		[isLoading]
	)
}
