import { formatNumber } from './format-date.util'

export const formatTime = (hours, minutes) =>
	`${formatNumber(hours)}:${formatNumber(minutes)}`
