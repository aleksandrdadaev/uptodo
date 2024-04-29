import Cookies from 'js-cookie'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'
import Loader from '../../ui/loader/Loader'

import styles from './Profile.module.scss'
import ProfileButtons from './profile-buttons/ProfileButtons'
import ProfileInfo from './profile-info/ProfileInfo'
import { useProfile } from './useProfile'

const Profile = () => {
	const { setIsAuth } = useAuth()

	const logoutHandler = () => {
		Cookies.remove('token')
		setIsAuth(false)
	}

	const { data, isLoading } = useProfile()
	return (
		<Layout title={'Профиль'}>
			<div className={styles.wrapper}>
				{isLoading ? <Loader /> : <ProfileInfo data={data} />}
				<ProfileButtons logout={logoutHandler} data={data} />
			</div>
		</Layout>
	)
}

export default Profile
