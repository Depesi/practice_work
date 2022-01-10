import React from 'react';
import style from './Contacts.module.scss';
import contactsPhoto from '../../img/contacts__bigPhoto.svg';
import constants from '../../constants/constants';

const PHONE_NUMBER = '+38(050) - 167 - 80 - 79';
const CHERNOVTSY = 'Черновцы:';
const KIEV = 'Киев:';
const CHERKASY = 'Черкассы:';
const LVOV = 'Львов:';

const Contacts = () => {
  return (
    <div className="container">
      <>
        <h2 className={style.contacts__header}> {constants.CONTACTS} </h2>
        <section className={style.contacts__row}>
          <div className={style.contact__block}>
            <div className={style.contacts__callCenter}>
              <h3 className={style.contacts__heading}>
                {constants.CALL_CENTER}
              </h3>
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
              <h3 className={style.contacts__heading}>
                {constants.PHONENUMBERS_OF_CITIES}
              </h3>
              <div className={style.contacts__container}>
                <div className={style.contacts__call_items}>
                  <div className={style.call__items_row}>
                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>
                        {CHERNOVTSY}
                      </span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>

                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>{KIEV}</span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>
                  </div>

                  <div className={style.call__items_row}>
                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>{CHERKASY}</span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>

                    <div className={style.call__items_item}>
                      <span className={style.call__items_city}>{LVOV}</span>
                      <a href="tel: +380501678079">{PHONE_NUMBER}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <>
        <img
          className={style.contacts__photo}
          src={contactsPhoto}
          alt="Call center"
        />
      </>
    </div>
  );
};

export default Contacts;
