/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getThemeMode, setError } from './redux/app-reducer';
// import closeIcon from './img/Close_icon.svg';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import HeaderContainer from './components/Header/Container/HeaderContainer';
import {
  getAppError,
  getDarkMode,
  getInitializeApp,
} from './redux/app-selectors';
import MainContainer from './components/Main/Container/MainContainer';
import Footer from './components/Footer/Footer';

const App = props => {
  useEffect(() => {
    props.getThemeMode();
  }, []);

  if (!props.initializeApp) {
    return (
      <div className="center">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  return (
    <>
      <div className={props.darkMode.darkMode ? 'dark-wrapper' : 'wrapper'}>
        <HeaderContainer darkMode={props.darkMode} />
        <div className="content__container">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/main" />
            </Route>
            <Route path="/practice_work" exact>
              <Redirect to="/main" />
            </Route>
            <Route path="/main" render={() => <MainContainer />} />
            <Route path="/contacts" render={() => <Contacts />} />
          </Switch>

          {/* {props.appError && (
            <div className="error__container">
              <div
                role="button"
                tabIndex={0}
                className="error__container_close"
                onClick={() => {
                  props.setError(false);
                }}
              >
                <img src={closeIcon} alt="close" />
              </div>
              <span className="error__container_text"> An error occurred </span>
            </div>
          )} */}
        </div>
      </div>
      <Footer />
    </>
  );
};

App.propTypes = {
  getThemeMode: PropTypes.func.isRequired,
  initializeApp: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
  //   appError: PropTypes.bool.isRequired,
  //   setError: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    darkMode: getDarkMode(state),
    initializeApp: getInitializeApp(state),
    appError: getAppError(state),
  };
};

export default compose(
  connect(mapStateToProps, { getThemeMode, setError }),
  withRouter,
)(App);
