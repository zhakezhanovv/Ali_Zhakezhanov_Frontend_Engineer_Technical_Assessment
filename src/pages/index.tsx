import { Redirect, Route, Switch } from 'wouter'

import { MainPage } from './main'

export function Pages() {
	return (
		<Switch>
			<Route path='/' component={MainPage} />
			<Redirect to={routes.main()} />
		</Switch>
	)
}

export const routes = {
	main: () => '/',
}
