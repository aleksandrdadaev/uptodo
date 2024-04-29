import cn from 'clsx'
import Cookies from 'js-cookie'
import { useState } from 'react'

import { colors } from '../../../assets/colors/colors-data'
import Button from '../../ui/button/Button'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './ChangeAppColor.module.scss'

const ChangeAppColor = ({ close }) => {
	const [activeColor, setActiveColor] = useState(Cookies.get('color'))

	const onSubmit = () => {
		Cookies.set('color', activeColor)
		document.body.style.setProperty('--accent', activeColor)
		close()
	}

	return (
		<ModalBg>
			<Modal title='Выберите цвет приложения'>
				<div className={styles.wrapper}>
					{colors.map(color => (
						<button
							key={color}
							className={cn(styles.button, {
								[styles.active]: color === activeColor
							})}
							style={{
								backgroundColor: color
							}}
							onClick={() => setActiveColor(color)}
						/>
					))}
				</div>
				<div className={styles.buttons}>
					<Button clickHandler={onSubmit}>Сохранить</Button>
				</div>
			</Modal>
		</ModalBg>
	)
}

export default ChangeAppColor
