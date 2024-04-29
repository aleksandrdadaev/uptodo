import { Link } from 'react-router-dom'

import Button from '../../../ui/button/Button'
import Field from '../../../ui/field/Field'
import Loader from '../../../ui/loader/Loader'
import styles from '../AuthPage.module.scss'
import { EMAIL_REGEXP } from '../auth.utils'

import { useLoginPage } from './useLoginPage'

const Login = () => {
	const {
		isLoading,
		navigate,
		handleSubmit,
		onSubmit,
		register,
		errors,
		error,
		isError
	} = useLoginPage()

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
				<h1>Вход</h1>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						label='Email'
						register={register}
						name='email'
						options={{
							required: true
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
							required: true
						}}
						error={errors.password}
						type='password'
						placeholder='Введите ваш пароль'
					/>
					<Button disabled={errors.email || errors.password}>Вход</Button>
					{isError && error.message}
				</form>
			</div>
			<div className={styles.linkWrapper}>
				<span className={styles.link}>
					У вас нет учетной записи?{' '}
					<Link to={'/auth/register'}>Зарегистрировать</Link>
				</span>
			</div>
		</section>
	)
}

export default Login
