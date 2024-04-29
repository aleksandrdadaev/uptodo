import { useState } from 'react'

import { formatTime } from '../../../../utils/format-time.util'
import Button from '../../../ui/button/Button'
import ModalBg from '../../modal-bg/ModalBg'
import Modal from '../../modal/Modal'

import styles from './ChooseTime.module.scss'
import Slider from './slider/Slider'

const ChooseTime = ({ defaultValue, changeTime, close }) => {
	const [hours, setHours] = useState(defaultValue.split(':')[0])
	const [minutes, setMinutes] = useState(defaultValue.split(':')[1])

	return (
		<ModalBg>
			<Modal title='Выберите время'>
				<div className={styles.wrapper}>
					<Slider value={hours} setValue={setHours} />
					<span className={styles.dots}>:</span>
					<Slider type='minutes' value={minutes} setValue={setMinutes} />
				</div>
				<div className={styles.buttons}>
					<Button mode='opacity' clickHandler={close}>
						Закрыть
					</Button>
					<Button
						clickHandler={() => {
							changeTime(formatTime(hours, minutes))
							close()
						}}
					>
						Сохранить
					</Button>
				</div>
			</Modal>
		</ModalBg>
	)
}

export default ChooseTime
