import cn from 'clsx'
import { useState } from 'react'

import Button from '../../ui/button/Button'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './Priority.module.scss'
import { createArray } from './create-array.util'

const Priority = ({ defaultValue, changePriority, close }) => {
	const [value, setValue] = useState(defaultValue)
	return (
		<ModalBg>
			<Modal title='Приоритет задачи'>
				<div className={styles.wrapper}>
					{createArray().map(priority => (
						<button
							className={cn(styles.button, {
								[styles.active]: value === priority
							})}
							key={priority}
							onClick={() => setValue(priority)}
						>
							<div className={styles.icon}></div>
							{priority}
						</button>
					))}
				</div>

				<div className={styles.buttons}>
					<Button mode='opacity' clickHandler={close}>
						Закрыть
					</Button>
					<Button
						clickHandler={() => {
							changePriority(value)
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

export default Priority
