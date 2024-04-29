import { useState } from 'react'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import AddTask from '../../modals/add-task/AddTask'

import styles from './Nav.module.scss'
import NavLinks from './nav-links/NavLinks'
import { nav } from './nav.data'

const Nav = ({ date, sort }) => {
	const { isShow, setIsShow, ref } = useOnClickOutside(false)

	return (
		<nav>
			<NavLinks array={nav[0]} />
			<button className={styles.add} onClick={() => setIsShow(true)}></button>
			<NavLinks array={nav[1]} />
			{isShow && (
				<AddTask
					close={() => setIsShow(false)}
					Ref={ref}
					date={date}
					sort={sort}
				/>
			)}
		</nav>
	)
}

export default Nav
