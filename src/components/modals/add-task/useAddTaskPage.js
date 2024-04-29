import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { TaskService } from '../../../services/task.service'
import { formatDate } from '../../../utils/format-date.util'
import { formatTime } from '../../../utils/format-time.util'

export const useAddTaskPage = (close, date, sort) => {
	const [isPriority, setIsPriority] = useState(false)
	const [isDate, setIsDate] = useState(false)
	const [isTime, setIsTime] = useState(false)
	const [isCategory, setIsCategory] = useState(false)

	const now = new Date()

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		getValues
	} = useForm({
		mode: 'all',
		defaultValues: {
			priority: 1,
			date: formatDate(now),
			time: formatTime(now.getHours(), now.getMinutes())
		}
	})

	const changePriority = priority => setValue('priority', priority)
	const changeCategory = id => setValue('categoryId', id)
	const changeDate = date => setValue('date', date)
	const changeTime = time => setValue('time', time)

	const onSubmit = data => {
		mutate({
			...data,
			isCompleted: false
		})
	}

	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		['create task'],
		data => {
			return TaskService.createTask(data)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries([`get tasks ${date} ${sort}`])
				close()
			}
		}
	)

	return useMemo(() => ({
		handleSubmit,
		onSubmit,
		register,
		errors,
		isPriority,
		setIsPriority,
		isDate,
		setIsDate,
		isTime,
		setIsTime,
		isCategory,
		setIsCategory,
		getValues,
		changePriority,
		changeDate,
		changeTime,
		changeCategory
	}))
}
