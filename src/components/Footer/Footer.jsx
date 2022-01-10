/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Footer.module.scss';
import constants from '../../constants/constants';

const Footer = props => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer__content}>
          {constants.DESYGN_BY}{' '}
          <span className={style.footer__name}>
            &copy; {constants.ANTON_KHOMITSKIY}{' '}
          </span>
          {constants.FOR} <span className={style.small__font}>1 </span>
          {constants.DEMO_IN_SOFTSERVE}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
