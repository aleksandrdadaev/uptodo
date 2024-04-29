import cn from 'clsx'

import styles from './Field.module.scss'

const Field = ({ label, register, name, options, error, ...rest }) => {
	return (
		<label className={styles.label}>
			{label}
			<input
				{...register(name, options)}
				{...rest}
				className={cn(styles.input, {
					[styles.error]: error
				})}
			/>
		</label>
	)
}

export default Field
