import React from 'react';
import style from './Contacts.module.scss';
import contactsPhoto from '../../img/contacts__bigPhoto.svg';

const PHONE_NUMBER = '+38(050) - 167 - 80 - 79';

const Contacts = () => {
  return (
    <div className="container">
      <div>
        <h2 className={style.contacts__header}> Контакты </h2>

        <div className={style.contacts__row}>
          <div className={style.contact__block}>
            <div className={style.contacts__callCenter}>
              <div className={style.contacts__heading}>call center</div>
              <div className={style.contacts__container}>
                <ul className={style.contacts__callCenter_list}>
                  <li className={style.callCenter__list_item}>
                    <a href="tel:+380501678079"> {PHONE_NUMBER}</a>
                  </li>
                  <li className={style.callCenter__list_item}>
                    <a href="tel:+380501678079"> {PHONE_NUMBER}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={style.contacts__call}>
            <div className={style.contact__block}>
              <div className={style.contacts__heading}>Номера регионов</div>
              <div className={style.contacts__container}>
                <div className={style.contacts__call_items}>
                  <div className={style.call__items_row}>
                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>Черновцы: </span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>

                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>Киев: </span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>
                  </div>

                  <div className={style.call__items_row}>
                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>Черкасы: </span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>

                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>Львов: </span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          className={style.contacts__photo}
          src={contactsPhoto}
          alt="Call center"
        />
      </div>
    </div>
  );
};

export default Contacts;
