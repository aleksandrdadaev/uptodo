import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'

import { TaskService } from '../../../../services/task.service'

export const useEditQuery = (id, close, date, sort) => {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		['edit task'],
		body => TaskService.editTask(id, body),
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
