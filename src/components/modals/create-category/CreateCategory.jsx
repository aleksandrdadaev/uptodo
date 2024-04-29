import { useMutation, useQueryClient } from '@tanstack/react-query'
import cn from 'clsx'
import { Controller, useForm } from 'react-hook-form'

import { colors } from '../../../assets/colors/colors-data'
import { CategoryService } from '../../../services/category.service'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'

import styles from './CreateCategory.module.scss'

const CreateCategory = ({ close }) => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		mode: 'all'
	})

	const onSubmit = data => {
		mutate(data)
	}

	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		['create category'],
		data => {
			return CategoryService.createNew(data)
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get categories'])
				close()
			}
		}
	)

	return (
		<section className={styles.wrapper}>
			{isLoading && <Loader mode='fixed' />}
			<div>
				<h1 className={styles.title}>Создать новую категорию</h1>
				<form className={styles.form}>
					<Field
						label='Название категории :'
						register={register}
						name='name'
						options={{
							required: true,
							maxLength: 10
						}}
						error={errors.name}
						type='text'
						placeholder='Название категории'
					/>
					<div
						className={cn(styles.label, {
							[styles.error]: errors.color
						})}
					>
						Цвет категории :
						<Controller
							control={control}
							name='color'
							rules={{
								required: true
							}}
							render={({ field: { onChange, value } }) => (
								<div className={styles.colors}>
									{colors.map(color => (
										<div
											key={color}
											className={cn(styles.color, {
												[styles.active]: value === color
											})}
											style={{
												backgroundColor: color
											}}
											onClick={() => onChange(color)}
										/>
									))}
								</div>
							)}
						/>
					</div>
				</form>
			</div>
			<div className={styles.buttons}>
				<Button mode='opacity' clickHandler={close}>
					Закрыть
				</Button>
				<Button clickHandler={handleSubmit(onSubmit)}>Создать категорию</Button>
			</div>
		</section>
	)
}

export default CreateCategory
