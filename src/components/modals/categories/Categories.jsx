import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { CategoryService } from '../../../services/category.service'
import Button from '../../ui/button/Button'
import Loader from '../../ui/loader/Loader'
import CreateCategory from '../create-category/CreateCategory'
import ModalBg from '../modal-bg/ModalBg'
import Modal from '../modal/Modal'

import styles from './Categories.module.scss'
import Category from './category/Category'
import CreateNew from './category/CreateNew'

const Categories = ({ close, changeCategory, defaultValue }) => {
	const { data, isLoading } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	const [value, setValue] = useState(defaultValue)

	const [isOpenNew, setIsOpenNew] = useState(false)

	return (
		<ModalBg>
			<Modal title='Выберите категорию'>
				<div className={styles.wrapper}>
					{isLoading ? (
						<Loader />
					) : (
						data.map(category => (
							<Category
								key={category.id}
								category={category}
								setValue={setValue}
								active={value === category.id}
							/>
						))
					)}
					<CreateNew clickHandler={() => setIsOpenNew(true)} />
				</div>
				<div className={styles.buttonWrapper}>
					<Button
						clickHandler={() => {
							changeCategory(value)
							close()
						}}
					>
						Сохранить
					</Button>
				</div>
			</Modal>
			{isOpenNew && <CreateCategory close={() => setIsOpenNew(false)} />}
		</ModalBg>
	)
}

export default Categories
