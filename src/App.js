import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import { getThemeMode, setError } from './redux/app-reducer'
import closeIcon from './img/Close_icon.svg'
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
			<>
				<div className={this.props.darkMode.darkMode ? "dark-wrapper" : "wrapper"}>
					<HeaderContainerC darkMode={this.props.darkMode} />
					<div className={"content__container"}>
						<Switch>
							<Route path='/' exact><Redirect to='/main' /></Route>
							<Route path='/practice_work' exact><Redirect to='/main' /></Route>
							<Route path='/main' render={() => <MainContainerC />} />
							<Route path='/contacts' render={() => <Contacts />} />
						</Switch>

						{this.props.appError &&
							<div className={"error__container"}>
								<div className={"error__container_close"} onClick={() => { this.props.setError(false) }}>
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
