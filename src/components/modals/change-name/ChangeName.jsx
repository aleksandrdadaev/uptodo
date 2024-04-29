import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { UserService } from '../../../services/user.service'
import Button from '../../ui/button/Button'
import Loader from '../../ui/loader/Loader'
import ModalField from '../../ui/modal-field/ModalField'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './ChangeName.module.scss'

const ChangeName = ({ close, defaultValue }) => {
	const queryClient = useQueryClient()

	const { mutate, isLoading } = useMutation(
		['change name'],
		name => UserService.changeName(name),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get profile'])
				close()
			}
		}
	)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'all',
		defaultValues: {
			name: defaultValue
		}
	})

	const onSubmit = data => {
		mutate(data.name)
	}

	return (
		<ModalBg>
			<Modal title='Изменить имя учетной записи' mode>
				{isLoading && <Loader mode='fixed' />}
				<div className={styles.wrapper}>
					<ModalField
						placeholder='Введите имя'
						name='name'
						register={register}
						error={errors.name}
						options={{
							required: true
						}}
					/>
				</div>
				<div className={styles.buttons}>
					<Button mode='opacity' clickHandler={close}>
						Закрыть
					</Button>
					<Button clickHandler={handleSubmit(onSubmit)}>Изменить</Button>
				</div>
			</Modal>
		</ModalBg>
	)
}

export default ChangeName
