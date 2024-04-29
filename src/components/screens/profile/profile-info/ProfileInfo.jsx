import styles from './ProfileInfo.module.scss'

const ProfileInfo = ({ data }) => {
	return (
		<div>
			<div className={styles.info}>
				{data.image ? (
					<img src={data.image} alt={data.name} className={styles.img} />
				) : (
					<div className={styles.icon} />
				)}

				<h1 className={styles.name}>{data.name}</h1>
			</div>
			<div className={styles.statWrapper}>
				<div className={styles.stat}>Выполнено {data.statistics.done}</div>
				<div className={styles.stat}>Осталось {data.statistics.left}</div>
			</div>
		</div>
	)
}

export default ProfileInfo
