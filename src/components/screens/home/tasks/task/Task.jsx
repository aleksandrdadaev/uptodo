import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { useState } from 'react'

import { TaskService } from '../../../../../services/task.service'
import EditTask from '../../../../modals/edit-task/EditTask'
import Loader from '../../../../ui/loader/Loader'

import styles from './Task.module.scss'
import Info from './info/Info'

const Task = ({ task, sort, date }) => {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		[`complete task ${task.id}`],
		() => {
			return TaskService.isCompleted(task.id, !task.isCompleted)
		},
		{
			onSuccess: () =>
				queryClient.invalidateQueries([`get tasks ${date} ${sort}`])
		}
	)

	const complete = () => {
		mutate()
	}

	const [isShowEdit, setIsShowEdit] = useState(false)

	return (
		<div className={styles.task}>
			{isLoading && <Loader mode='fixed' />}
			<button
				className={cn(styles.button, {
					[styles.complete]: task.isCompleted,
					[styles.unComplete]: !task.isCompleted
				})}
				onClick={complete}
			></button>
			<button className={styles.taskBody} onClick={() => setIsShowEdit(true)}>
				<h2 className={styles.title}>{task.title}</h2>
				<span className={styles.time}>{task.time}</span>
			</button>
			<Info task={task} />
			{isShowEdit && (
				<EditTask
					task={task}
					close={() => setIsShowEdit(false)}
					date={date}
					sort={sort}
				/>
			)}
		</div>
	)
}

export default Task
