import cn from 'clsx'

import ModalField from '../../ui/modal-field/ModalField'
import Categories from '../categories/Categories'
import ChooseDate from '../date-time/date/ChooseDate'
import ChooseTime from '../date-time/time/ChooseTime'
import ModalBg from '../modal-bg/ModalBg'
import Priority from '../priorities/Priority'

import styles from './AddTask.module.scss'
import { useAddTaskPage } from './useAddTaskPage'

const AddTask = ({ close, Ref, date, sort }) => {
	const {
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
	} = useAddTaskPage(close, date, sort)

	return (
		<ModalBg bottom>
			<div className={styles.wrapper} ref={Ref}>
				<div className={styles.header}>
					<h1 className={styles.title}>Добавить задачу</h1>
				</div>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<ModalField
						register={register}
						name='title'
						options={{
							required: true
						}}
						error={errors.title}
						type='text'
						placeholder='Заголовок'
						autoFocus
					/>
					<ModalField
						register={register}
						name='description'
						options={{
							required: true
						}}
						error={errors.description}
						type='text'
						placeholder='Описание'
					/>
					<input
						type='hidden'
						{...register('categoryId', {
							required: true
						})}
					/>
					<button className={cn(styles.button, styles.send)} />
				</form>
				<div className={styles.buttons}>
					<button
						className={cn(styles.button, styles.time)}
						onClick={() => setIsDate(true)}
					/>

					<button
						className={cn(styles.button, styles.category)}
						onClick={() => setIsCategory(true)}
					/>
					<button
						className={cn(styles.button, styles.priority)}
						onClick={() => setIsPriority(true)}
					/>
				</div>
				{isPriority && (
					<Priority
						close={() => setIsPriority(false)}
						defaultValue={getValues('priority')}
						changePriority={changePriority}
					/>
				)}
				{isDate && (
					<ChooseDate
						close={() => setIsDate(false)}
						defaultValue={getValues('date')}
						changeDate={changeDate}
						openTime={() => setIsTime(true)}
					/>
				)}
				{isTime && (
					<ChooseTime
						close={() => setIsTime(false)}
						defaultValue={getValues('time')}
						changeTime={changeTime}
					/>
				)}
				{isCategory && (
					<Categories
						close={() => setIsCategory(false)}
						changeCategory={changeCategory}
						defaultValue={getValues('categoryId')}
					/>
				)}
			</div>
		</ModalBg>
	)
}

export default AddTask
