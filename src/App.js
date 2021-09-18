import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import { getThemeMode, setError } from './redux/app-reducer'
import closeIcon from './img/Close_icon.svg'
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main';
import Header from './components/Header/Header';

const App = (props) => {
	useEffect(() => {
		props.getThemeMode()
	}, [])

	if (!props.initializeApp) {
		return (
			<div className="center">
				<div className="lds-dual-ring"></div>
			</div>
		)
	}

	return (
		<>
			<div className={props.darkMode.darkMode ? "dark-wrapper" : "wrapper"}>
				<Header darkMode={props.darkMode} />
				<div className={"content__container"}>
					<Switch>
						<Route path='/' exact><Redirect to='/main' /></Route>
						<Route path='/practice_work' exact><Redirect to='/main' /></Route>
						<Route path='/main' render={() => <Main />} />
						<Route path='/contacts' render={() => <Contacts />} />
					</Switch>

					{props.appError &&
						<div className={"error__container"}>
							<div className={"error__container_close"} onClick={() => { props.setError(false) }}>
								<img src={closeIcon} />
							</div>
							<span className={"error__container_text"}> An error occurred </span>
						</div>
					}
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		darkMode: state.app.darkMode,
		initializeApp: state.app.initializeApp,
		appError: state.app.appError
	}
}

export default compose(
	connect(mapStateToProps, { getThemeMode, setError }),
	withRouter
)(App)
