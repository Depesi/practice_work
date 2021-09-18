import { useState } from 'react';
import styled from 'styled-components'

const AboveGrid = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-bottom: 15px;
`

const AboveTable = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 15px;
`
const PhotosGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 20%);
grid-template-rows: repeat(2, 220px);
box-sizing: border-box;

@media (max-width: 900px) {
		grid-template-rows: repeat(2, 150px);
}
`

const SwitchPhotosStyle = styled.button`
display: inline-block;
padding: 10px 12px;
border: 2px solid #24bb96;
background-color: #24bb96;
box-sizing: border-box;
border-radius: 30px;
transition: all 0.3s;	
color: #ffffff;
font-size: 16px;
cursor: pointer;

&:hover {
	color: #24bb96;
	background-color: #ffffff;
}
`

const PhotosGridItem = styled.img`
height: 100%;
width: 100%;
position: absolute;
opacity: 1;
transition: 0.5s;
`

const GridItemTitle = styled.div`
transform: translate(0, -100%);
transition: all 0.5s;
text-align: center;
padding: 20px;
font-size: 20px;
color: #ffffff;
`

const PhotosGridItemOverlay = styled.div`
position: relative;
background-color: black;
overflow: hidden;

&:hover {
	${PhotosGridItem} {
		opacity: 0.5;
	}
	${GridItemTitle} {
		position: absolute;
		transform: translate(0, 0);
	}
}
`
const SearchInput = styled.input`
font-size: 16px;
width: 300px;
padding: 10px 8px;
filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
outline: none;
border: none;
`

const PhotosTable = styled.div`
display: flex;
flex-wrap: wrap;
`

const PhotosTableContainer = styled.div`
display: flex;
flex-direction: column;
flex-basis: 23%;
background-color: #ffffff;	
border-radius: 16px;
margin-bottom: 25px;
margin-right: 28px;
filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.25));

&:nth-child(4n) {
	margin-right: 0;
}
`

const PhotosTablePhoto = styled.img`
border-top-left-radius: 16px;
border-top-right-radius: 16px;
margin-bottom: 10px;
filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
`
const TableItemDescription = styled.div`
padding: 0 10px;
padding-bottom: 10px;
`

const Grid = (props) => {
	const [tableMode, setTableMode] = useState(false);
	const [value, setValue] = useState('')

	const gridPhotos = props.gridPhotos.filter(img => img.id <= props.maxLength)
	const filteredPhoto = gridPhotos.filter(img => {
		return img?.title?.toLowerCase().includes(value.toLowerCase())
	})

	return (
		<div>
			{!tableMode
				?
				(<>
					<AboveGrid>
						<SwitchPhotosStyle onClick={() => setTableMode(true)}>Table mode</SwitchPhotosStyle>
					</AboveGrid>

					<PhotosGrid>
						{gridPhotos
							.map(img => {
								return <PhotosGridItemOverlay key={img.id}>
									<PhotosGridItem src={img.thumbnailUrl} />
									<GridItemTitle>{img.title}</GridItemTitle>
								</PhotosGridItemOverlay>
							})}
					</PhotosGrid>
				</>)
				:
				(<div>
					<AboveTable>
						<form>
							<SearchInput
								type={"text"}
								placeholder={"Search the photo"}
								onChange={(e) => setValue(e.target.value)}
							/>
						</form>

						<SwitchPhotosStyle onClick={() => setTableMode(false)}>Grid mode</SwitchPhotosStyle>
					</AboveTable>

					<PhotosTable>
						{filteredPhoto
							.map(img => {
								return <PhotosTableContainer key={img.id}>
									<PhotosTablePhoto src={img.thumbnailUrl} />
									<TableItemDescription>{img.title}</TableItemDescription>
								</PhotosTableContainer>
							})}
					</PhotosTable>
				</div>)
			}
		</div>
	)
}

export default Grid