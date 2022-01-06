/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import style from './Modal.module.scss';

const Modal = ({ active, setActive, ...props }) => {
  return (
    <div
      className={active ? `${style.modal} ${style.active}` : `${style.modal}`}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className={style.modal__content} onClick={e => e.stopPropagation()}>
        <div className={style.modal__content_title}> {props.title}</div>
        <img
          src={props.photo}
          alt={props.title}
          className={style.modal__content_image}
        />
        <div className={style.modal__content_description}>
          <span> Краткое содержание: </span> {props.description}
        </div>

        <div className={style.modal__content_rate}> Рейтинг: {props.rate} </div>
      </div>
    </div>
  );
};

export default Modal;
