import cn from 'clsx'

import styles from './Category.module.scss'

const Category = ({ category, setValue, active }) => {
	return (
		<button
			className={cn(styles.button, {
				[styles.active]: active
			})}
			style={{
				backgroundColor: category.color
			}}
			onClick={() => setValue(category.id)}
		>
			{category.name}
		</button>
	)
}

export default Category
