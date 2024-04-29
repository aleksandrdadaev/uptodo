import styles from './Slide.module.scss'

const Slide = ({ imgLink, title, text }) => {
	return (
		<div className={styles.wrapper}>
			<img src={imgLink} alt={title} className={styles.img} />
			<div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	)
}

export default Slide
