import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div>
				<Switch>
					<Route path='/' exact><Redirect to='/main' /></Route>
					<Route path='/main' render={() => <Main />} />
					<Route path='/contacts' render={() => <Contacts />} />
				</Switch>
			</div>
			{/* <Contacts />
			<Main /> */}
		</div >
	);
}

export default App;
