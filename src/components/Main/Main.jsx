import Grid from './Grid/Grid'
import style from './Main.module.scss'
import Slider from './Slider/Slider'

const Main = (props) => {
	let maxLength = 10

	return (
		<div>
			<div className='container'>
				<Slider sliderPhotos={props.sliderPhotos} maxLength={maxLength} />
				<div className={style.grid__heading}> Галерея </div>
				<Grid gridPhotos={props.sliderPhotos} maxLength={maxLength} />
			</div>

		</div>
	)
}

export default Main