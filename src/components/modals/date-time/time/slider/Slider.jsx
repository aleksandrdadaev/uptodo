import cn from 'clsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Slider.module.scss'

const Slider = ({ type = 'hours', value, setValue }) => {
	const array = []
	const length = type === 'hours' ? 24 : 60
	for (let i = 0; i < length; i++) {
		array.push(String(i).length === 1 ? `0${i}` : i)
	}

	return (
		<div className={styles.wrapper}>
			<Swiper
				onInit={swiper => swiper.slideToLoop(value, 300, 13)}
				className={styles.wrapper}
				spaceBetween={0}
				direction='vertical'
				slidesPerView={3}
				slidesPerGroup={1}
				loop={true}
				centeredSlides={true}
				onSlideChange={({ realIndex }) => setValue(realIndex)}
			>
				{array.map(item => (
					<SwiperSlide
						className={cn(styles.slide, {
							[styles.active]: value == item
						})}
						key={item}
					>
						{item}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
