/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSliderPhotos } from './redux/photos-reducer';
import './App.scss';
import Contacts from './components/Contacts/Contacts';
import { getInitializeApp } from './redux/app-selectors';
import MainContainer from './components/Main/Container/MainContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = props => {
  useEffect(() => {
    props.getSliderPhotos();
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
      <div className="wrapper">
        <Header />
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
        </div>
      </div>
      <Footer />
    </>
  );
};

App.defaultProps = {
  getSliderPhotos: () => {},
  initializeApp: false,
};

App.propTypes = {
  getSliderPhotos: PropTypes.func,
  initializeApp: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    initializeApp: getInitializeApp(state),
  };
};

export default compose(
  connect(mapStateToProps, { getSliderPhotos }),
  withRouter,
)(App);
