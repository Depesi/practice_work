import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PhotosTable = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1060px) {
    width: 960px;
    margin: 0 auto;
  }

  @media (max-width: 960px) {
    width: 768px;
    margin: 0 auto;
  }
`;

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

  @media (max-width: 1060px) {
    flex-basis: 22%;
  }
`;

const PhotosTablePhoto = styled.img`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-bottom: 10px;
  filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
`;
const TableItemDescription = styled.div`
  padding: 0 10px;
  padding-bottom: 10px;
`;

const PhotosTableDisplay = props => {
  return (
    <PhotosTable>
      {props.filteredPhoto.map(img => {
        return (
          <PhotosTableContainer key={img.id}>
            <PhotosTablePhoto src={img.thumbnailUrl} />
            <TableItemDescription>{img.title}</TableItemDescription>
          </PhotosTableContainer>
        );
      })}
    </PhotosTable>
  );
};

PhotosTableDisplay.propTypes = {
  filteredPhoto: PropTypes.array.isRequired,
};

export default PhotosTableDisplay;
