/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Footer.module.scss';

const Footer = props => {
  return (
    <footer className={style.footer}>
      <div className="container">
        Designed by &copy;
        <span className={style.footer__name}> Anton Khomitskiy</span> for{' '}
        <span className={style.small__font}>1</span>St Demo in SoftServe
      </div>
    </footer>
  );
};

export default Footer;
