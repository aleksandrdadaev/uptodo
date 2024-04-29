import cn from 'clsx'
import { useState } from 'react'

import styles from './Tasks.module.scss'
import Task from './task/Task'

const Tasks = ({ title, tasks, sort, date }) => {
	const [isShow, setIsShow] = useState(true)

	if (tasks.length === 0) return null
	return (
		<div className={styles.tasks}>
			<button
				className={styles.button}
				onClick={() => setIsShow(prev => !prev)}
			>
				{title}
				<div
					className={cn(styles.icon, {
						[styles.show]: isShow
					})}
				></div>
			</button>
			{isShow &&
				tasks.map(task => (
					<Task task={task} key={task.id} sort={sort} date={date} />
				))}
		</div>
	)
}

export default Tasks
