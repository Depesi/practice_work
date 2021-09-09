import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'
import { setSliderPhotos, getSliderPhotos } from './../../redux/photos-reducer'

class MainContainerC extends React.Component {

	componentDidMount() {
		this.props.getSliderPhotos();
	}

	render() {
		return (
			<Main {...this.props} />
		)

	}
}

let mapStateToProps = (state) => {
	return {
		sliderPhotos: state.photos.sliderPhotos
	}
}
export default connect(mapStateToProps, { setSliderPhotos, getSliderPhotos })(MainContainerC)