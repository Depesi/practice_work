import React from 'react'
import { connect } from 'react-redux'
import Main from './Main'

class MainContainerC extends React.Component {

	render() {
		return (
			<div className='container'>
				<Main {...this.props} />
			</div>
		)

	}
}

let mapStateToProps = (state) => {
	return {
		sliderPhotos: state.photos.sliderPhotos
	}
}
export default connect(mapStateToProps, null)(MainContainerC)