import cn from 'clsx'

import styles from './SortMenu.module.scss'
import { sortMenuData } from './sort-menu-data'

const SortMenu = ({ sort, setSort }) => {
	return (
		<div className={styles.menu}>
			{sortMenuData.map(button => (
				<button
					key={button.value}
					className={cn(styles.button, {
						[styles.active]: sort === button.value
					})}
					onClick={() =>
						sort === button.value ? false : setSort(button.value)
					}
				>
					{button.text}
				</button>
			))}
		</div>
	)
}

export default SortMenu
