export const formatDate = date => {
	if (typeof date === 'string') return date

	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()

	return `${year}-${formatNumber(month)}-${formatNumber(day)}`
}

export const formatNumber = number =>
	String(number).length === 1 ? `0${number}` : number
