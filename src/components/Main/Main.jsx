import Grid from './Grid/Grid'
import style from './Main.module.scss'
import Slider from './Slider/Slider'

const Main = (props) => {
	return (
		<div>

			<div className='container'>

				<Slider />
				<div className={style.grid__heading}> Галерея </div>
				<Grid sliderPhotos={props.sliderPhotos} />
			</div>
		</div>

	)
}

export default Main