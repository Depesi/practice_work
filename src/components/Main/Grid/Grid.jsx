import style from './Grid.module.scss'

const Grid = (props) => {

	let gridPhotos = props.gridPhotos.filter(img => img.id <= props.maxLength)
	console.log(gridPhotos);

	return (
		<div className={style.photos__grid}>
			{gridPhotos
				.map(img => {
					return <div key={img.id} className={style.photos__grid_itemOverlay}>
						<img className={style.photos__grid_item} src={img.thumbnailUrl} />
						<div className={style.grid__item_title}>{img.title}</div>
					</div>
				})
			}
		</div>
	)
}

export default Grid