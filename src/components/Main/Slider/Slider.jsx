import { useState } from 'react'
import style from './Slider.module.scss'

const Slider = ({ sliderPhotos, ...props }) => {
	let sortPhotos = sliderPhotos.filter(i => i.id <= props.maxLength)

	const [currentImage, setCurrentImage] = useState(1);

	return (
		<div className={style.slider__container}>
			{currentImage <= 1
				? <div className={style.slider__container_arrowsDisabled}>&#9664;</div>
				: <div className={style.slider__container_arrows} onClick={() => setCurrentImage(currentImage - 1)}>&#9664;</div>
			}

			{sortPhotos
				.map((img) => {
					if (img.id === currentImage) {
						return <div key={img.id} className={style.slider__item}>
							<img className={style.slider__active} src={img.url}></img>
						</div>
					}
				})}
			{currentImage >= props.maxLength
				? <div className={style.slider__container_arrowsDisabled}>&#9654;</div>
				: <div className={style.slider__container_arrows} onClick={() => setCurrentImage(currentImage + 1)}>&#9654;</div>
			}
		</div>
	)
}

export default Slider