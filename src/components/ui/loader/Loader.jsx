import cn from 'clsx'

import styles from './Loader.module.scss'

const Loader = ({ mode = 'static' }) => {
	return (
		<div className={cn(styles.wrapper, styles[mode])}>
			<img
				src='/src/assets/icons/loader/puff.svg'
				alt='Загрузка'
				className={styles.loader}
			/>
		</div>
	)
}

export default Loader
