import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import { getThemeMode } from './redux/app-reducer'
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import MainContainerC from './components/Main/MainContainerC';
import HeaderContainerC from './components/Header/HeaderContainerC';

class App extends React.Component {

	componentDidMount() {
		this.props.getThemeMode()
	}

	render() {
		if (!this.props.initializeApp) {
			return (
				<div className="center">
					<div className="lds-dual-ring"></div>
				</div>
			)
		}
		return (
			<div className={this.props.darkMode.darkMode ? "dark-wrapper" : "wrapper"}>
				<HeaderContainerC darkMode={this.props.darkMode} />
				<div>
					<Switch>
						<Route path='/' exact><Redirect to='/main' /></Route>
						<Route path='/main' render={() => <MainContainerC />} />
						<Route path='/contacts' render={() => <Contacts />} />
					</Switch>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		darkMode: state.app.darkMode,
		initializeApp: state.app.initializeApp
	}
}

export default compose(
	connect(mapStateToProps, { getThemeMode }),
	withRouter
)(App)
