import { useState } from 'react';
import style from './Grid.module.scss'

const Grid = (props) => {
	let [tableMode, setTableMode] = useState(false);
	let [value, setValue] = useState('')

	let gridPhotos = props.gridPhotos.filter(img => img.id <= props.maxLength)
	let filteredPhoto = gridPhotos.filter(img => {
		return img.title.toLowerCase().includes(value.toLowerCase())
	})

	return (
		<div>
			{!tableMode
				? <div>
					<div className={style.above__grid}>
						<button className={style.switch__photos_style} onClick={() => setTableMode(true)}>Table mode</button>
					</div>
					<div className={style.photos__grid}>
						{gridPhotos
							.map(img => {
								return <div key={img.id} className={style.photos__grid_itemOverlay}>
									<img className={style.photos__grid_item} src={img.thumbnailUrl} />
									<div className={style.grid__item_title}>{img.title}</div>
								</div>
							})}
					</div>
				</div>
				: <div>
					<div className={style.above__table}>
						<form className={style.search__form}>
							<input
								type={"text"}
								placeholder={"Search the photo"}
								className={style.search__input}
								onChange={(e) => setValue(e.target.value)}
							/>
						</form>

						<button className={style.switch__photos_style} onClick={() => setTableMode(false)}>Grid mode</button>
					</div>
					<div className={style.photos__table}>
						{filteredPhoto
							.map(img => {
								return <div key={img.id} className={style.photos__table_container}>
									<img className={style.photos__table_photo} src={img.thumbnailUrl} />
									<div className={style.table__item_description}>{img.title}</div>
								</div>
							})}
					</div>
				</div>
			}
		</div>
	)
}

export default Grid