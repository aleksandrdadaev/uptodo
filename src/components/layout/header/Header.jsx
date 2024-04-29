import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'

import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import { UserService } from '../../../services/user.service'
import Loader from '../../ui/loader/Loader'

import styles from './Header.module.scss'
import SortMenu from './sort-menu/SortMenu'

const Header = ({ title, sort, setSort }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { ref, isShow, setIsShow } = useOnClickOutside(false)

	const { data, isLoading } = useQuery(
		['get user image'],
		() => UserService.getUserImage(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<header
			className={cn(styles.header, {
				[styles.onlyTitle]: pathname !== '/home'
			})}
		>
			{pathname === '/home' && (
				<div
					style={{
						position: 'relative'
					}}
					ref={ref}
				>
					<button
						style={{
							backgroundImage: 'url(/src/assets/icons/sort.svg)'
						}}
						onClick={() => setIsShow(prev => !prev)}
					/>
					{isShow && <SortMenu sort={sort} setSort={setSort} />}
				</div>
			)}
			<h1>{title}</h1>
			{pathname === '/home' && (
				<button onClick={() => navigate('/profile')}>
					{isLoading ? (
						<Loader />
					) : (
						<img
							src={
								data.image ? data.image : '/src/assets/icons/profile/user.svg'
							}
							alt='Имя'
						/>
					)}
				</button>
			)}
		</header>
	)
}

export default Header
