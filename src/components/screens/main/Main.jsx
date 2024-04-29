import { useNavigateToHome } from '../../../hooks/useNavigateToHome'

import styles from './Main.module.scss'
import Slider from './slider/Slider'

const Main = () => {
	useNavigateToHome()

	return (
		<section className={styles.wrapper}>
			<Slider />
		</section>
	)
}

export default Main
