import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { UserService } from '../../../services/user.service'
import Button from '../../ui/button/Button'
import Loader from '../../ui/loader/Loader'
import ModalField from '../../ui/modal-field/ModalField'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './ChangePass.module.scss'

const ChangePass = ({ close }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'all'
	})

	const { mutate, isLoading, isError, error } = useMutation(
		['change pass'],
		body => UserService.changePassword(body),
		{
			onSuccess: () => close(),
			onError: () =>
				reset({
					password: '',
					newPassword: ''
				})
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<ModalBg>
			<Modal title='Изменить пароль учетной записи' mode>
				{isLoading && <Loader mode='fixed' />}
				<div className={styles.wrapper}>
					<div>
						<span className={styles.label}>Введите старый пароль</span>
						<ModalField
							type='password'
							placeholder='Старый пароль'
							name='password'
							register={register}
							error={errors.password}
							options={{
								required: true
							}}
						/>
					</div>
					<div>
						<span className={styles.label}>Введите новый пароль</span>
						<ModalField
							type='password'
							placeholder='Новый пароль'
							name='newPassword'
							register={register}
							error={errors.newPassword}
							options={{
								required: true
							}}
						/>
					</div>
					{isError && <span className={styles.error}>{error.message}</span>}
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

export default ChangePass
