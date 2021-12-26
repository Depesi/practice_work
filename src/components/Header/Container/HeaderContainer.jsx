/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { setThemeMode, setTheme } from '../../../redux/app-reducer';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    darkMode: state.app.darkMode,
    setThemeMode: state.app.setThemeMode,
  };
};

export default connect(mapStateToProps, { setThemeMode, setTheme })(
  HeaderContainer,
);
