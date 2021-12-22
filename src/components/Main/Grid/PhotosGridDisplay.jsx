import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 220px);
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-template-rows: repeat(2, 150px);
  }
`;
const PhotosGridItem = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 1;
  transition: 0.5s;
`;

const GridItemTitle = styled.div`
  transform: translate(0, -100%);
  transition: all 0.5s;
  text-align: center;
  padding: 20px;
  font-size: 20px;
  color: #ffffff;
`;

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
`;

const PhotosGridDisplay = props => {
  return (
    <PhotosGrid>
      {props.filteredPhoto.map(img => {
        return (
          <PhotosGridItemOverlay key={img.id}>
            <PhotosGridItem src={img.thumbnailUrl} />
            <GridItemTitle>{img.title}</GridItemTitle>
          </PhotosGridItemOverlay>
        );
      })}
    </PhotosGrid>
  );
};

PhotosGridDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosGridDisplay;
