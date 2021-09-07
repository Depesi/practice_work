import * as axios from 'axios';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import MainContainerC from './components/Main/MainContainerC';

class App extends React.Component {

	componentDidMount() {
		axios.get("http://localhost:3000/photos")
			.then((response) => {
				let data = response.data
				console.log(data)
			})
	}

	render() {
		return (
			<div className="wrapper">
				<Header />
				<div>
					<Switch>
						<Route path='/' exact><Redirect to='/main' /></Route>
						<Route path='/main' render={() => <MainContainerC />} />
						<Route path='/contacts' render={() => <Contacts />} />
					</Switch>
				</div>
			</div >
		);
	}
}
export default App;
