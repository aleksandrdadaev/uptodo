import cn from 'clsx'

import styles from './Info.module.scss'

const Info = ({ task }) => {
	return (
		<div className={styles.wrapper}>
			<div
				className={styles.blok}
				style={{
					backgroundColor: task.category.color
				}}
			>
				{task.category.name}
			</div>
			<div className={cn(styles.blok, styles.priority)}>
				<div
					className={styles.icon}
					style={{
						backgroundImage: 'url(/src/assets/icons/home/task/flag.svg)'
					}}
				></div>
				{task.priority}
			</div>
		</div>
	)
}

export default Info
