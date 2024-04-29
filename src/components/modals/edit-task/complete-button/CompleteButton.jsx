import cn from 'clsx'
import { Controller } from 'react-hook-form'

import styles from './CompleteButton.module.scss'

const CompleteButton = ({ control }) => {
	return (
		<Controller
			control={control}
			name='isCompleted'
			render={({ field: { value, onChange } }) => (
				<button
					className={cn(styles.checkbox, {
						[styles.complete]: value
					})}
					onClick={() => onChange(!value)}
				/>
			)}
		/>
	)
}

export default CompleteButton
