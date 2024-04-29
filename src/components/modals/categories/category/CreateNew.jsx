import styles from './Category.module.scss'

const CreateNew = ({ clickHandler }) => {
	return (
		<button
			className={styles.button}
			style={{
				backgroundColor: '#80FFD1'
			}}
			onClick={clickHandler}
		>
			<img
				src='/src/assets/icons/modals/create-category.svg'
				alt='Создать категорию'
				className={styles.img}
			/>
		</button>
	)
}

export default CreateNew
