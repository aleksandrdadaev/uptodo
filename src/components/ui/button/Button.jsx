import cn from 'clsx'

import styles from './Button.module.scss'

const Button = ({ children, mode = 'fill', clickHandler, disabled }) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.opacity]: mode === 'opacity',
				[styles.border]: mode === 'border',
				[styles.disabled]: disabled
			})}
			onClick={clickHandler}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
