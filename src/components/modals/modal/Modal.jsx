import cn from 'clsx'

import styles from './Modal.module.scss'

const Modal = ({ children, title, mode = false }) => {
	return (
		<div
			className={cn(styles.wrapper, {
				[styles.mode]: mode
			})}
		>
			<div className={styles.header}>{title}</div>
			{children}
		</div>
	)
}

export default Modal
