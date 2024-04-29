import { useState } from 'react'

import Button from '../../ui/button/Button'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './EditTitle.module.scss'

const EditTitle = ({ close, defaultTitle, defaultDesc, changeValue }) => {
	const [title, setTitle] = useState(defaultTitle)
	const [desc, setDesc] = useState(defaultDesc)

	return (
		<ModalBg>
			<Modal title='Изменить заголовок задачи' mode>
				<div className={styles.wrapper}>
					<input
						type='text'
						className={styles.input}
						placeholder='Заголовок'
						value={title}
						onChange={event => setTitle(event.target.value)}
					/>
					<input
						type='text'
						className={styles.input}
						placeholder='Описание'
						value={desc}
						onChange={event => setDesc(event.target.value)}
					/>
				</div>
				<div className={styles.buttons}>
					<Button mode='opacity' clickHandler={close}>
						Закрыть
					</Button>
					<Button
						clickHandler={() => {
							changeValue(title, desc)
							close()
						}}
					>
						Изменить
					</Button>
				</div>
			</Modal>
		</ModalBg>
	)
}

export default EditTitle
