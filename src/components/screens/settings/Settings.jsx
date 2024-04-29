import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import ChangeAppColor from '../../modals/change-app-color/ChangeAppColor'
import Button from '../profile/profile-buttons/button/Button'
import CategoryButtons from '../profile/profile-buttons/category-buttons/CategoryButtons'

import styles from './Settings.module.scss'

const Settings = () => {
	const navigate = useNavigate()
	const [isChangeColor, setIsChangeColor] = useState(false)

	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>
				<button className={styles.back} onClick={() => navigate('/profile')} />
				<h1 className={styles.title}>Настройки</h1>
			</header>
			<section className={styles.buttons}>
				<CategoryButtons title='Настройки'>
					<Button
						iconPath='/src/assets/icons/settings/color.svg'
						clickHandler={() => setIsChangeColor(true)}
					>
						Измените цвет приложения
					</Button>
					<Button iconPath='/src/assets/icons/settings/text.svg'>
						Измените шрифт приложения
					</Button>
					<Button iconPath='/src/assets/icons/settings/language.svg'>
						Измените язык приложения
					</Button>
				</CategoryButtons>
				<CategoryButtons title='Импорт'>
					<Button iconPath='/src/assets/icons/settings/import.svg'>
						Импорт из Google calendar
					</Button>
				</CategoryButtons>
				{isChangeColor && (
					<ChangeAppColor close={() => setIsChangeColor(false)} />
				)}
			</section>
		</div>
	)
}

export default Settings
