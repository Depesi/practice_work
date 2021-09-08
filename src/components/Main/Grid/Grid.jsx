import style from './Grid.module.scss'

const Grid = (props) => {

	let gridPhotos = props.sliderPhotos.filter((img) => img.id <= 10)
		.map((img) => {
			return <div className={style.photos__grid_itemOverlay}> <img className={style.photos__grid_item} src={img.thumbnailUrl} /></div>
		})

	return (
		<div className={style.photos__grid}>
			{gridPhotos}
		</div>
	)
}

export default Grid