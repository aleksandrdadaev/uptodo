import React from 'react'

import Layout from '../../layout/Layout'

import styles from './Statistics.module.scss'

const Statistics = () => {
	return (
		<Layout title={'Статистика'}>
			<div className={styles.wrapper}>
				<h1>Страница в разработке</h1>
				<img
					src='/src/assets/icons/builders.png'
					alt='Страница в разработке'
					className={styles.img}
				/>
			</div>
		</Layout>
	)
}

export default Statistics
