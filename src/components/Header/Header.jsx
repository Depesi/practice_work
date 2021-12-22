/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Header.module.scss';
import { setThemeMode, setTheme } from '../../redux/app-reducer';
import { getDarkMode } from '../../redux/app-selectors';

const Header = props => {
  const theme = props.darkMode;

  return (
    <header className={theme.darkMode ? style.headerDark : style.header}>
      <div className="container">
        <div className={style.header__row}>
          <div className={style.header__logo}>LOGO</div>
          <nav>
            <ul className={style.header__navbar}>
              <li>
                <NavLink to="/main"> Main</NavLink>
              </li>
              <li>
                <NavLink to="/contacts"> Contacts</NavLink>
              </li>

              <div
                role="button"
                tabIndex={0}
                className={style.toggleContainer}
                onClick={
                  theme.darkMode
                    ? () => props.setThemeMode(false)
                    : () => props.setThemeMode(true)
                }
              >
                <div className={style.toggleWrapper}>
                  <label htmlFor="dn" className={style.toggle}>
                    <input
                      type="checkbox"
                      className={style.dn}
                      id="dn"
                      checked={!!theme.darkMode}
                    />
                    <span className={style.toggle__handler}>
                      <span
                        className={`${style.crater} ${style.crater1}`}
                      ></span>
                      <span
                        className={`${style.crater} ${style.crater2}`}
                      ></span>
                      <span
                        className={`${style.crater} ${style.crater3}`}
                      ></span>
                    </span>
                    <span className={`${style.star} ${style.star1}`}></span>
                    <span className={`${style.star} ${style.star2}`}></span>
                    <span className={`${style.star} ${style.star3}`}></span>
                    <span className={`${style.star} ${style.star4}`}></span>
                    <span className={`${style.star} ${style.star5}`}></span>
                    <span className={`${style.star} ${style.star6}`}></span>
                  </label>
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setThemeMode: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    darkMode: getDarkMode(state),
  };
};

export default connect(mapStateToProps, { setThemeMode, setTheme })(Header);