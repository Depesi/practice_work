import style from './Main.module.scss'

const Main = (props) => {

	let result = props.sliderPhotos.map((img) => {
		return <img src={img.thumbnailUrl} />
	})

	return (
		<div className='container'>
			Main
			{result}
		</div>
	)
}

export default Main