import { useState } from 'react'

import { useTasks } from '../../../hooks/useTasks'

import { formatDate } from '../../../utils/format-date.util'
import Layout from '../../layout/Layout'
import Loader from '../../ui/loader/Loader'

import styles from './Home.module.scss'
import Empty from './empty/Empty'
import Tasks from './tasks/Tasks'

const Home = () => {
	const [sort, setSort] = useState('time')

	const { data, isLoading } = useTasks(formatDate(new Date()), sort)

	return (
		<Layout
			title={'Главная'}
			sort={sort}
			setSort={setSort}
			date={formatDate(new Date())}
		>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					{data.length === 0 ? (
						<Empty />
					) : (
						<div className={styles.wrapper}>
							<div className={styles.tasksWrapper}>
								<Tasks
									title='Сегодня'
									tasks={data.filter(task => task.isCompleted === false)}
									sort={sort}
									date={formatDate(new Date())}
								/>
								<Tasks
									title='Выполнено'
									tasks={data.filter(task => task.isCompleted === true)}
									sort={sort}
									date={formatDate(new Date())}
								/>
							</div>
						</div>
					)}
				</div>
			)}
		</Layout>
	)
}

export default Home
