import style from './Contacts.module.scss'
import contactsPhoto from './../../img/contacts__bigPhoto.svg'

const Contacts = () => {
	return (
		<div className="container">
			<div>
				<h2 className={style.contacts__header}> Контакти </h2>

				<div className={style.contacts__row}>
					<div className={style.contact__block}>
						<div className={style.contacts__callCenter}>
							<div className={style.contacts__heading}>call center</div>
							<div className={style.contacts__container}>
								<ul className={style.contacts__callCenter_list}>
									<li className={style.callCenter__list_item}> <a href="tel:+380501678079"> +38(050) - 167 - 80 - 79</a></li>
									<li className={style.callCenter__list_item}> <a href="tel:+380501678079"> +38(050) - 167 - 80 - 79</a></li>
								</ul>
							</div>
						</div>
					</div>

					<div className={style.contacts__call}>
						<div className={style.contact__block}>
							<div className={style.contacts__heading}>Номери регіонів</div>

							<div className={style.contacts__container}>
								<div className={style.contacts__call_items}>
									<div className={style.call__items_row}>
										<span className={style.call__items_city}>Чернівці: </span> <a href="tel: +380501678079">+38(050) - 167 - 80 - 79</a>
										<span className={style.call__items_city}>Черкаси: </span> <a href="tel: +380501678079">+38(050) - 167 - 80 - 79</a>
									</div>

									<div className={style.call__items_row}>
										<span className={style.call__items_city}>Київ: </span> <a href="tel: +380501678079">+38(050) - 167 - 80 - 79</a>
										<span className={style.call__items_city}>Львів: </span> <a href="tel: +380501678079">+38(050) - 167 - 80 - 79</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={style.contacts__photo}>
				<img src={contactsPhoto} />
			</div>
		</div>
	)
}

export default Contacts