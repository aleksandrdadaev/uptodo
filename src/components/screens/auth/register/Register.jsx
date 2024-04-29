import { Link } from 'react-router-dom'

import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'
import Loader from '../../../ui/loader/Loader'
import styles from '../AuthPage.module.scss'
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '../auth.utils'

import { useRegisterPage } from './useRegisterPage'

const Register = () => {
	const {
		isLoading,
		getValues,
		navigate,
		handleSubmit,
		onSubmit,
		register,
		errors,
		error,
		isError
	} = useRegisterPage()

	return (
		<section className={styles.wrapper}>
			{isLoading && <Loader mode='fixed' />}
			<div>
				<header className={styles.header}>
					<button
						className={styles.button}
						onClick={() => navigate('/auth')}
					></button>
				</header>
				<h1>Регистрация</h1>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						label='Email'
						register={register}
						name='email'
						options={{
							required: true,
							pattern: EMAIL_REGEXP
						}}
						error={errors.email}
						type='email'
						placeholder='Введите ваш email'
					/>
					<Field
						label='Пароль'
						register={register}
						name='password'
						options={{
							required: true,
							pattern: PASSWORD_REGEXP
						}}
						error={errors.password}
						type='password'
						placeholder='Введите пароль'
					/>
					<Field
						label='Подтвердите пароль'
						register={register}
						name='confirmPassword'
						options={{
							required: true,
							validate: value => getValues('password') === value
						}}
						error={errors.confirmPassword}
						type='password'
						placeholder='Подтвердите пароль'
					/>
					<Button
						disabled={errors.email || errors.password || errors.confirmPassword}
					>
						Зарегистрироваться
					</Button>
					{isError && error.message}
				</form>
			</div>
			<div className={styles.linkWrapper}>
				<span className={styles.link}>
					У вас уже есть учетная запись? <Link to={'/auth/login'}>Войти</Link>
				</span>
			</div>
		</section>
	)
}

export default Register
