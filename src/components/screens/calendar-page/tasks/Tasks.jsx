import { useState } from 'react'

import { useTasks } from '../../../../hooks/useTasks'

import Button from '../../../ui/button/Button'
import Loader from '../../../ui/loader/Loader'
import Task from '../../home/tasks/task/Task'

import styles from './Tasks.module.scss'
import TasksWrapper from './TasksWrapper'

const Tasks = ({ date }) => {
	const { data, isLoading } = useTasks(date)

	const [filter, setFilter] = useState(false)

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : data.length === 0 ? (
				<h1>На выбранный день незапланированно задач</h1>
			) : (
				<div className={styles.tasks}>
					<div className={styles.buttons}>
						<Button
							clickHandler={() => setFilter(false)}
							mode={filter ? 'border' : 'fill'}
						>
							Сегодня
						</Button>
						<Button
							clickHandler={() => setFilter(true)}
							mode={filter ? 'fill' : 'border'}
						>
							Выполнено
						</Button>
					</div>
					<TasksWrapper
						tasks={
							filter
								? data.filter(task => task.isCompleted === true)
								: data.filter(task => task.isCompleted === false)
						}
						date={date}
						sort='time'
					/>
				</div>
			)}
		</div>
	)
}

export default Tasks
