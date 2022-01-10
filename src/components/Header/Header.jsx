/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import constants from '../../constants/constants';

const Header = props => {
  const LOGO = 'LOGO';
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__row}>
          <div className={style.header__logo}>
            <NavLink to="/main">{LOGO}</NavLink>
          </div>
          <nav className={style.nav}>
            <ul className={style.header__navbar}>
              <li>
                <NavLink to="/main">{constants.MAIN}</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">{constants.CONTACTS}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
