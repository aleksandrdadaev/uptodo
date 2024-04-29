import { useNavigate } from 'react-router-dom'
import { useSwiper } from 'swiper/react'

import Button from '../../../../ui/button/Button'

import styles from './Navigation.module.scss'

const Navigation = ({ activeSlide }) => {
	const swiper = useSwiper()
	const navigate = useNavigate()

	return (
		<div className={styles.wrapper}>
			<button className={styles.back} onClick={() => swiper.slidePrev()}>
				НАЗАД
			</button>
			<Button
				clickHandler={() =>
					activeSlide === swiper.slides.length
						? navigate('/auth')
						: swiper.slideNext()
				}
			>
				{activeSlide === swiper.slides.length ? 'НАЧАТЬ' : 'ДАЛЕЕ'}
			</Button>
		</div>
	)
}

export default Navigation
