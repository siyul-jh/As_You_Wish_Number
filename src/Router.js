import App from './App';
import { Switch, Route } from 'react-router-dom';
export default function Router() {
	return (
		<Switch>
			<Route exact path='/' component={App} />
		</Switch>
	);
}
