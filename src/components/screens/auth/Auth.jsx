import { useNavigate } from 'react-router-dom'

import { useNavigateToHome } from '../../../hooks/useNavigateToHome'

import Button from '../../ui/button/Button'

import styles from './Auth.module.scss'

const Auth = () => {
	useNavigateToHome()
	const navigate = useNavigate()

	return (
		<section className={styles.wrapper}>
			<button className={styles.back} onClick={() => navigate('/')} />
			<div className={styles.text}>
				<h1>Добро пожаловать в UpTodo</h1>
				<p>
					Пожалуйста, войдите в свою учетную запись или создайте новую, чтобы
					продолжить
				</p>
			</div>
			<div className={styles.buttons}>
				<Button clickHandler={() => navigate('/auth/login')}>Вход</Button>
				<Button mode='border' clickHandler={() => navigate('/auth/register')}>
					Создать аккаунт
				</Button>
			</div>
		</section>
	)
}

export default Auth
