import { Pages } from '@/pages'
import { Layout } from '@/shared/ui'
import { AppModal } from '@/widgets/app_modal'

import './index.scss'
import { withProviders } from './providers'

function App() {
	return (
		<Layout.App>
			<Pages />
			<AppModal />
		</Layout.App>
	)
}

export default withProviders(App)
