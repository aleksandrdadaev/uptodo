import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ChangeName from '../../../modals/change-name/ChangeName'
import ChangePass from '../../../modals/change-pass/ChangePass'

import styles from './ProfileButtons.module.scss'
import Button from './button/Button'
import CategoryButtons from './category-buttons/CategoryButtons'

const ProfileButtons = ({ logout, data }) => {
	const [isChangeName, setIsChangeName] = useState(false)
	const [isChangePass, setIsChangePass] = useState(false)
	const navigate = useNavigate()
	return (
		<div className={styles.wrapper}>
			<CategoryButtons title='Настройки'>
				<Button
					iconPath='/src/assets/icons/profile/setting.svg'
					clickHandler={() => navigate('/settings')}
				>
					Настройки приложения
				</Button>
			</CategoryButtons>
			<CategoryButtons title='Аккаунт'>
				<Button
					iconPath='/src/assets/icons/profile/user.svg'
					clickHandler={() => setIsChangeName(true)}
				>
					Изменить имя учетной записи
				</Button>
				<Button
					iconPath='/src/assets/icons/profile/key.svg'
					clickHandler={() => setIsChangePass(true)}
				>
					Изменить пароль учетной записи
				</Button>
				<Button iconPath='/src/assets/icons/profile/camera.svg'>
					Изменить фото учетной записи
				</Button>
			</CategoryButtons>
			<CategoryButtons title='UpToDo'>
				<Button iconPath='/src/assets/icons/profile/about-us.svg'>О нас</Button>
				<Button iconPath='/src/assets/icons/profile/info-circle.svg'>
					FAQ
				</Button>
				<Button iconPath='/src/assets/icons/profile/help.svg'>
					Помощь и обратная связь
				</Button>
				<Button iconPath='/src/assets/icons/profile/support.svg'>
					Поддержите нас
				</Button>
				<Button
					logout
					iconPath='/src/assets/icons/profile/logout.svg'
					clickHandler={logout}
				>
					Выйти
				</Button>
			</CategoryButtons>
			{isChangeName && (
				<ChangeName
					close={() => setIsChangeName(false)}
					defaultValue={data.name}
				/>
			)}
			{isChangePass && <ChangePass close={() => setIsChangePass(false)} />}
		</div>
	)
}

export default ProfileButtons
