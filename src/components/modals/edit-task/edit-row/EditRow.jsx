import styles from './EditRow.module.scss'

const EditRow = ({ title, icon, type, value, clickHandler }) => {
	let text

	switch (type) {
		case 'datetime':
			text = `${value.date} в ${value.time}`
			break
		case 'category':
			text = value.name
			break
		case 'priority':
			text = value === 1 ? 'По умолчанию' : value
			break
	}

	return (
		<div className={styles.row}>
			<div className={styles.info}>
				<div
					className={styles.icon}
					style={{
						backgroundImage: `url(${icon})`
					}}
				/>
				{title}
			</div>
			<button
				className={styles.button}
				style={{
					backgroundColor: type === 'category' ? value.color : ''
				}}
				onClick={clickHandler}
			>
				{text}
			</button>
		</div>
	)
}

export default EditRow
