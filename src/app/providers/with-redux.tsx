import { store } from '@/store'
import { type ReactNode } from 'react'
import { Provider } from 'react-redux'

export function withRedux(component: () => ReactNode) {
	return () => {
		return <Provider store={store}>{component()}</Provider>
	}
}
