/* eslint-disable no-unused-vars */
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
              <li>
                <NavLink to="/admin">{constants.ENTER}</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
