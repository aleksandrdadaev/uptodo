import styles from './ModalField.module.scss'

const ModalField = ({ register, name, options, error, ...rest }) => {
	return (
		<input {...register(name, options)} {...rest} className={styles.input} />
	)
}

export default ModalField
