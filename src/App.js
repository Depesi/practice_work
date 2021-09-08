import * as axios from 'axios';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { mainAPI } from './api/api';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import MainContainerC from './components/Main/MainContainerC';

class App extends React.Component {

	componentDidMount() {
		let data = mainAPI.getSliderPhotos()
		console.log(data);
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
