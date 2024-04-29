import cn from 'clsx'

import styles from './ModalBg.module.scss'

const ModalBg = ({ bottom = false, children }) => {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.bottom]: bottom
			})}
		>
			{children}
		</section>
	)
}

export default ModalBg
