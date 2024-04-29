import { useQuery } from '@tanstack/react-query'

import { TaskService } from '../services/task.service'

export const useTasks = (date, sort = 'time') => {
	return useQuery(
		[`get tasks ${date} ${sort}`, date, sort],
		() => TaskService.getTasksByDate(date, sort),
		{
			select: ({ data }) => data
		}
	)
}
