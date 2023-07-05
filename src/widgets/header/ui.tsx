import { routes } from '@/pages'
import { Logo } from '@/shared/assets'
import { Layout } from '@/shared/ui'
// import cn from 'classnames'
import { Link } from 'wouter'

import styles from './styles.module.scss'

export function Header() {
	return (
		<Layout.Header className={styles.root}>
			<Layout.Container>
				<div className={styles.header}>
					<Link to={routes.main()}>
						<img className={styles.header__logo} src={Logo} alt='' />
					</Link>

					<a
						className={styles.header__link}
						href='https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf'
						target='_blank'
						rel='noreferrer'
					>
						Download CORS extension before use
					</a>
				</div>
			</Layout.Container>
		</Layout.Header>
	)
}
