let initialState = {
	sliderPhotos: [
		{
			albumId: 1,
			id: 1,
			title: "accusamus beatae ad facilis cum similique qui sunt",
			url: "https://via.placeholder.com/600/92c952",
			thumbnailUrl: "https://via.placeholder.com/150/92c952"
		}
	]
}

const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default photosReducer;