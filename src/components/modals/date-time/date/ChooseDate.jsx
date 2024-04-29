import cn from 'clsx'
import { useState } from 'react'
import Calendar from 'react-calendar'

import { formatDate } from '../../../../utils/format-date.util'
import { formatMonth } from '../../../../utils/format-month.util'
import Button from '../../../ui/button/Button'
import ModalBg from '../../modal-bg/ModalBg'

import styles from './Date.module.scss'

const ChooseDate = ({ defaultValue, changeDate, close, openTime }) => {
	const [value, setValue] = useState(defaultValue)

	return (
		<ModalBg>
			<div className={styles.wrapper}>
				<Calendar
					onChange={setValue}
					value={value}
					defaultValue={defaultValue}
					maxDetail='month'
					minDetail='month'
					nextLabel={<div className={cn('arrow', 'arrow_right')}></div>}
					prevLabel={<div className={cn('arrow', 'arrow_left')}></div>}
					next2Label={null}
					prev2Label={null}
					formatMonthYear={(locale, date) => {
						return (
							<div className='react-calendar__navigation_date'>
								<span className='month'>{formatMonth(date.getMonth())}</span>
								<span className='year'>{date.getFullYear()}</span>
							</div>
						)
					}}
				/>
				<div className={styles.buttons}>
					<Button mode='opacity' clickHandler={close}>
						Закрыть
					</Button>
					<Button
						clickHandler={() => {
							changeDate(formatDate(value))
							close()
							openTime()
						}}
					>
						Выбрать время
					</Button>
				</div>
			</div>
		</ModalBg>
	)
}

export default ChooseDate
