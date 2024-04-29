import { useNavigateToAuth } from '../../hooks/useNavigateToAuth'

import styles from './Layout.module.scss'
import Header from './header/Header'
import Nav from './nav/Nav'

const Layout = ({ children, title, sort, setSort, date }) => {
	useNavigateToAuth()
	return (
		<section className={styles.layout}>
			<Header title={title} sort={sort} setSort={setSort} />
			<section className={styles.content}>{children}</section>
			<Nav date={date} sort={sort} />
		</section>
	)
}

export default Layout
