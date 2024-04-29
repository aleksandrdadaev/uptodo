import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { useNavigateToAuth } from '../../../hooks/useNavigateToAuth'

import { TaskService } from '../../../services/task.service'
import Button from '../../ui/button/Button'
import Loader from '../../ui/loader/Loader'
import Categories from '../categories/Categories'
import ChooseDate from '../date-time/date/ChooseDate'
import ChooseTime from '../date-time/time/ChooseTime'
import DeleteTask from '../delete-task/DeleteTask'
import EditTitle from '../edit-title/EditTitle'
import Priority from '../priorities/Priority'

import styles from './EditTask.module.scss'
import CompleteButton from './complete-button/CompleteButton'
import { useDeleteQuery } from './delete-query/useDeleteQuery'
import { useEditQuery } from './edit-query/useEditQuery'
import EditRow from './edit-row/EditRow'

const EditTask = ({ task, close, date, sort }) => {
	useNavigateToAuth()

	const [editTitle, setEditTitle] = useState(false)
	const [editDate, setEditDate] = useState(false)
	const [editTime, setEditTime] = useState(false)
	const [editCategory, setEditCategory] = useState(false)
	const [editPriority, setEditPriority] = useState(false)
	const [deleteTask, setDeleteTask] = useState(false)

	const { mutate: edit, isLoading: editLoading } = useEditQuery(
		task.id,
		close,
		date,
		sort
	)

	const { mutate: del, isLoading: delLoading } = useDeleteQuery(
		task.id,
		close,
		date,
		sort
	)

	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues
	} = useForm({
		mode: 'all',
		defaultValues: {
			title: task.title,
			description: task.description,
			isCompleted: task.isCompleted,
			date: task.date,
			time: task.time,
			priority: task.priority,
			categoryId: task.categoryId
		}
	})

	const onSubmit = formData => {
		edit(formData)
	}

	const changeText = (title, desc) => {
		setValue('title', title)
		setValue('description', desc)
	}

	const changeDate = date => setValue('date', date)
	const changeTime = time => setValue('time', time)

	const changeCategory = id => setValue('categoryId', id)

	const changePriority = priority => setValue('priority', priority)

	return (
		<section className={styles.wrapper}>
			{editLoading && <Loader mode='fixed' />}
			{delLoading && <Loader mode='fixed' />}
			<header className={styles.header}>
				<button className={styles.close} onClick={close}></button>
			</header>
			<div className={styles.content}>
				<div className={styles.form}>
					<div className={styles.row}>
						<div className={styles.mainInfo}>
							<CompleteButton control={control} />
							<div>
								<h1 className={styles.title}>{getValues('title')}</h1>
								<p className={styles.description}>{getValues('description')}</p>
							</div>
						</div>
						<button
							className={styles.icon}
							style={{
								backgroundImage: 'url("/src/assets/icons/edit.svg")'
							}}
							onClick={() => setEditTitle(true)}
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
						clickHandler={() => setEditDate(true)}
					/>
					<EditRow
						title='Категория задачи :'
						icon='/src/assets/icons/modals/category.svg'
						type='category'
						value={{
							name: task.category.name,
							color: task.category.color
						}}
						clickHandler={() => setEditCategory(true)}
					/>
					<EditRow
						title='Приоритет задачи :'
						icon='/src/assets/icons/modals/priority.svg'
						type='priority'
						value={getValues('priority')}
						clickHandler={() => setEditPriority(true)}
					/>
					<button className={styles.delete} onClick={() => setDeleteTask(true)}>
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
			{editTitle && (
				<EditTitle
					close={() => setEditTitle(false)}
					defaultTitle={getValues('title')}
					defaultDesc={getValues('description')}
					changeValue={changeText}
				/>
			)}
			{editDate && (
				<ChooseDate
					close={() => setEditDate(false)}
					defaultValue={getValues('date')}
					changeDate={changeDate}
					openTime={() => setEditTime(true)}
				/>
			)}
			{editTime && (
				<ChooseTime
					close={() => setEditTime(false)}
					defaultValue={getValues('time')}
					changeTime={changeTime}
				/>
			)}
			{editCategory && (
				<Categories
					close={() => setEditCategory(false)}
					changeCategory={changeCategory}
					defaultValue={getValues('categoryId')}
				/>
			)}
			{editPriority && (
				<Priority
					close={() => setEditPriority(false)}
					changePriority={changePriority}
					defaultValue={getValues('priority')}
				/>
			)}
			{deleteTask && (
				<DeleteTask
					title={getValues('title')}
					close={() => setDeleteTask(false)}
					deleteFunc={() => del()}
				/>
			)}
		</section>
	)
}

export default EditTask
