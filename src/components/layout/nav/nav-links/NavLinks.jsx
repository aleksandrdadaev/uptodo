import cn from 'clsx'
import { NavLink, useLocation } from 'react-router-dom'

import styles from './NavLinks.module.scss'

const NavLinks = ({ array }) => {
	const { pathname } = useLocation()
	return (
		<>
			{array.map(item => (
				<NavLink
					key={item.title}
					to={item.path}
					className={cn({
						[styles.active]: pathname === item.path
					})}
				>
					<div
						style={{
							backgroundImage: `url(/src/assets/icons/nav/${item.icon})`
						}}
						className={styles.img}
					/>
					{item.title}
				</NavLink>
			))}
		</>
	)
}

export default NavLinks
