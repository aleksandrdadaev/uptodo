import styles from './CategoryButtons.module.scss'

const CategoryButtons = ({ title, children }) => {
	return (
		<div>
			<span className={styles.title}>{title}</span>
			<div className={styles.buttons}>{children}</div>
		</div>
	)
}

export default CategoryButtons
