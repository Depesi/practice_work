import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'
import lightTheme from '../../img/light__theme.svg'
import darkTheme from '../../img/dark__theme.svg'


const Header = (props) => {
	let theme = props.darkMode;

	return (
		<header className={theme.darkMode ? style.headerDark : style.header}>
			<div className="container">
				<div className={style.header__row}>
					<div className={style.header__logo}>
						LOGO
					</div>
					<nav>
						<ul className={style.header__navbar}>
							<li><NavLink to={"/main"}> Main</NavLink></li>
							<li><NavLink to={"/contacts"}> Contacts</NavLink></li>

							<div className={style.toggleContainer}
								onClick={theme.darkMode ? () => props.setThemeMode(false) : () => props.setThemeMode(true)}>
								<div className={style.toggleWrapper}>
									<input type={'checkbox'} className={style.dn} id="dn" checked={theme.darkMode ? true : false} />
									<label for="dn" className={style.toggle}>
										<span className={style.toggle__handler}>
											<span className={style.crater + ' ' + style.crater1}></span>
											<span className={style.crater + ' ' + style.crater2}></span>
											<span className={style.crater + ' ' + style.crater3}></span>
										</span>
										<span className={style.star + ' ' + style.star1}></span>
										<span className={style.star + ' ' + style.star2}></span>
										<span className={style.star + ' ' + style.star3}></span>
										<span className={style.star + ' ' + style.star4}></span>
										<span className={style.star + ' ' + style.star5}></span>
										<span className={style.star + ' ' + style.star6}></span>
									</label>
								</div>
							</div>
							{/* {theme.darkMode
								? <img src={darkTheme} className={style.swap__theme_icon}
									onClick={() => { props.setThemeMode(false) }} />
								: <img src={lightTheme} className={style.swap__theme_icon}
									onClick={() => { props.setThemeMode(true) }} />} */}
						</ul>
					</nav>
				</div>
			</div>
		</header >
	)
}

export default Header