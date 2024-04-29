import cn from 'clsx'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'

import { useTasks } from '../../../hooks/useTasks'

import { formatDate } from '../../../utils/format-date.util'
import { formatMonth } from '../../../utils/format-month.util'
import { formatWeekDay } from '../../../utils/format-week-day.util'
import Layout from '../../layout/Layout'
import Loader from '../../ui/loader/Loader'
import Task from '../home/tasks/task/Task'

import styles from './CalendarPage.module.scss'
import Tasks from './tasks/Tasks'

const CalendarPage = () => {
	const [value, setValue] = useState(formatDate(new Date()))

	return (
		<Layout title='Календарь'>
			<Calendar
				className='calendar-page'
				onChange={value => setValue(formatDate(value))}
				value={value}
				defaultValue={value}
				maxDetail='month'
				minDetail='month'
				nextLabel={<div className={cn('arrow', 'arrow_right')}></div>}
				prevLabel={<div className={cn('arrow', 'arrow_left')}></div>}
				next2Label={null}
				prev2Label={null}
				showNeighboringMonth={false}
				tileContent={({ date }) => formatWeekDay(date.getDay())}
				formatMonthYear={(locale, date) => {
					return (
						<div className='react-calendar__navigation_date'>
							<span className='month'>{formatMonth(date.getMonth())}</span>
							<span className='year'>{date.getFullYear()}</span>
						</div>
					)
				}}
			/>
			<section className={styles.wrapper}>
				<Tasks date={value} />
			</section>
		</Layout>
	)
}

export default CalendarPage
