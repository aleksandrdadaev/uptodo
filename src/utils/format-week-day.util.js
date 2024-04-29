export const formatWeekDay = day => {
	switch (day) {
		case 0:
			return 'ВС'
		case 1:
			return 'ПН'
		case 2:
			return 'ВТ'
		case 3:
			return 'СР'
		case 4:
			return 'ЧТ'
		case 5:
			return 'ПТ'
		case 6:
			return 'СБ'
	}
}
