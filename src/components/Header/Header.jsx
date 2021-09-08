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
							{theme.darkMode
								? <img src={darkTheme} className={style.swap__theme_icon}
									onClick={() => { props.setThemeMode(false) }} />
								: <img src={lightTheme} className={style.swap__theme_icon}
									onClick={() => { props.setThemeMode(true) }} />}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header