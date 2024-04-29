import cn from 'clsx'

import styles from './Button.module.scss'

const Button = ({ children, iconPath, logout = false, clickHandler }) => {
	return (
		<button className={styles.button} onClick={clickHandler}>
			<div
				className={cn(styles.content, {
					[styles.logout]: logout
				})}
			>
				<div
					className={styles.icon}
					style={{
						backgroundImage: `url(${iconPath})`
					}}
				></div>
				{children}
			</div>
			{!logout && <div className={cn(styles.icon, styles.arrow)} />}
		</button>
	)
}

export default Button
