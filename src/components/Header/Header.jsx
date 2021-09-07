import { NavLink } from 'react-router-dom'
import style from './Header.module.scss'

const Header = (props) => {
	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.header__row}>
					<div className={style.header__logo}>
						LOGO
					</div>
					<nav>
						<ul className={style.header__navbar}>
							<li><NavLink to={"/main"}> Main</NavLink></li>
							<li><NavLink to={"/contacts"}> Contacts</NavLink></li>
							{/* <li>Settings</li> */}
						</ul>
					</nav>
				</div>
			</div>

		</header >
	)
}

export default Header