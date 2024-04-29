import Button from '../../ui/button/Button'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './DeleteTask.module.scss'

const DeleteTask = ({ close, title, deleteFunc }) => {
	return (
		<ModalBg>
			<Modal title='Удалить задачу' mode>
				<p className={styles.text}>
					Вы уверены, что хотите удалить эту задачу? Название задания : {title}
				</p>
				<div className={styles.buttons}>
					<Button mode='opacity' clickHandler={close}>
						Закрыть
					</Button>
					<Button clickHandler={deleteFunc}>Удалить</Button>
				</div>
			</Modal>
		</ModalBg>
	)
}

export default DeleteTask
