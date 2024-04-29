import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

import './Slider.scss'
import Navigation from './navigation/Navigation'
import Slide from './slide/Slide'

const Slider = () => {
	const [activeSlide, setActiveSlide] = useState(1)
	const navigate = useNavigate()
	return (
		<Swiper
			className='main-slider'
			modules={[Pagination]}
			pagination={{ clickable: true }}
			onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex + 1)}
		>
			<button className='skip' onClick={() => navigate('/auth')}>
				ПРОПУСТИТЬ
			</button>
			<SwiperSlide>
				<Slide
					imgLink='/src/assets/icons/main/Manage your tasks.svg'
					title='Управляйте своими задачами'
					text='Вы можете легко и бесплатно управлять всеми своими ежедневными задачами'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Slide
					imgLink='/src/assets/icons/main/Create daily routine.svg'
					title='Создайте распорядок дня'
					text='В «Планировщик задач» вы можете создать свой индивидуальный распорядок дня, чтобы оставаться продуктивным'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Slide
					imgLink='/src/assets/icons/main/Orgonaize your tasks.svg'
					title='Организуйте свои задачи'
					text='Вы можете упорядочить свои ежедневные задачи, распределив их по отдельным категориям'
				/>
			</SwiperSlide>

			<Navigation activeSlide={activeSlide} />
		</Swiper>
	)
}

export default Slider
