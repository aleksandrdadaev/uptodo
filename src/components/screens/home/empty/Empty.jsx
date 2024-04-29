import styles from './Empty.module.scss'

const Empty = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.img}></div>
			<h2 className={styles.title}>Чем ты хочешь заняться сегодня?</h2>
			<span className={styles.span}>Нажмите +, чтобы добавить свои задачи</span>
		</div>
	)
}

export default Empty
