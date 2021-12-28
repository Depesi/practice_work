import { connect } from 'react-redux';
import Header from '../Header';
import { setThemeMode, setTheme } from '../../../redux/app-reducer';

const mapStateToProps = state => {
  return {
    darkMode: state.app.darkMode,
    setThemeMode: state.app.setThemeMode,
  };
};

export default connect(mapStateToProps, { setThemeMode, setTheme })(Header);