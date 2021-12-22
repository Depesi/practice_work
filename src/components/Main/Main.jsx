import { useEffect } from 'react'
import Grid from './Grid/Grid'
import style from './Main.module.scss'
import Slider from './Slider/Slider'
import { setSliderPhotos, getSliderPhotos } from './../../redux/photos-reducer'
import { connect } from 'react-redux'
import { getPhotosForSlider } from '../../redux/photos-selectors'

const Main = (props) => {
	useEffect(() => {
		props.getSliderPhotos();
	}, [])

	const maxLength = 10

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

const mapStateToProps = (state) => {
	return {
		sliderPhotos: getPhotosForSlider(state)
	}
}
export default connect(mapStateToProps, { setSliderPhotos, getSliderPhotos })(Main)