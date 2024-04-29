import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { useNavigateToAuth } from '../../../hooks/useNavigateToAuth'

import { TaskService } from '../../../services/task.service'
import CompleteButton from '../../modals/edit-task/complete-button/CompleteButton'
import EditRow from '../../modals/edit-task/edit-row/EditRow'
import Button from '../../ui/button/Button'
import Loader from '../../ui/loader/Loader'

import styles from './EditTask.module.scss'

const EditTask = () => {
	useNavigateToAuth()
	const navigate = useNavigate()
	const { id } = useParams()
	const { data, isLoading, isSuccess, isError } = useQuery(
		[`get task ${id}`],
		() => TaskService.getTask(id),
		{
			select: ({ data }) => data
		}
	)

	const {
		register,
		handleSubmit,
		control,
		setValue,
		formState: { errors },
		getValues
	} = useForm({
		mode: 'all'
		// defaultValues: {
		// 	title: data?.title,
		// 	description: data?.description,
		// 	isCompleted: data?.isCompleted,
		// 	date: data?.date,
		// 	time: data?.time,
		// 	categoryId: data?.categoryId,
		// 	priority: data?.priority
		// }
	})
	const onSubmit = formData => {
		console.log(formData)
	}

	if (isSuccess) {
		setValue('title', data.title)
		setValue('description', data.description)
		setValue('isCompleted', data.isCompleted)
		setValue('date', data.date)
		setValue('time', data.time)
		setValue('categoryId', data.categoryId)
		setValue('priority', data.priority)
	}

	return (
		<section className={styles.wrapper}>
			<header className={styles.header}>
				<button
					className={styles.close}
					onClick={() => navigate('/home')}
				></button>
			</header>
			{isLoading ? (
				<Loader mode='fixed' />
			) : isSuccess ? (
				<div className={styles.content}>
					<div className={styles.form}>
						<div className={styles.row}>
							<div className={styles.mainInfo}>
								<CompleteButton control={control} />
								<div>
									<h1 className={styles.title}>{getValues('title')}</h1>
									<p className={styles.description}>
										{getValues('description')}
									</p>
								</div>
							</div>
							<button
								className={styles.icon}
								style={{
									backgroundImage: 'url("/src/assets/icons/edit.svg")'
								}}
							></button>
						</div>
						<EditRow
							title='Время задачи :'
							icon='/src/assets/icons/modals/time.svg'
							type='datetime'
							value={{
								date: getValues('date'),
								time: getValues('time')
							}}
						/>
						<EditRow
							title='Категория задачи :'
							icon='/src/assets/icons/modals/category.svg'
							type='category'
							value={{
								name: data.category.name,
								color: data.category.color
							}}
						/>
						<EditRow
							title='Приоритет задачи :'
							icon='/src/assets/icons/modals/priority.svg'
							type='priority'
							value={getValues('priority')}
						/>
						<button className={styles.delete}>
							<div
								className={styles.icon}
								style={{
									backgroundImage: 'url("/src/assets/icons/trash.svg")'
								}}
							/>
							Удалить задачу
						</button>
					</div>

					<Button clickHandler={handleSubmit(onSubmit)}>
						Редактировать задачу
					</Button>
				</div>
			) : (
				<span>Произошла ошибка</span>
			)}
		</section>
	)
}

export default EditTask
