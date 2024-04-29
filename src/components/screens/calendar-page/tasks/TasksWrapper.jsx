import Task from '../../home/tasks/task/Task'

const TasksWrapper = ({ tasks, date, sort }) => {
	return (
		<>
			{tasks.map(task => (
				<Task task={task} key={task.id} date={date} sort={sort} />
			))}
		</>
	)
}

export default TasksWrapper
