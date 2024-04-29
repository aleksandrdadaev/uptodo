import { useQuery } from '@tanstack/react-query'

import { CategoryService } from '../services/category.service'

export const useCategories = () => {
	return useQuery(['get categories'], () => CategoryService.getAll(), {
		select: ({ data }) => data
	})
}
