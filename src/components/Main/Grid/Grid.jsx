import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhotosGridDisplay from './PhotosGridDisplay';
import PhotosTableDisplay from './PhotosTableDisplay';

const AboveTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

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
`;

const SearchInput = styled.input`
  font-size: 16px;
  width: 300px;
  padding: 10px 8px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
  outline: none;
  border: none;
`;

const Grid = props => {
  const [tableMode, setTableMode] = useState(false);
  const [value, setValue] = useState('');

  const gridPhotos = props.gridPhotos.filter(img => img.id <= props.maxLength);
  const filteredPhoto = gridPhotos.filter(img => {
    return img?.title?.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <AboveTable>
        <form>
          <SearchInput
            type="text"
            placeholder="Search the photo"
            onChange={e => setValue(e.target.value)}
          />
        </form>

        {!tableMode ? (
          <SwitchPhotosStyle onClick={() => setTableMode(true)}>
            Table mode
          </SwitchPhotosStyle>
        ) : (
          <SwitchPhotosStyle onClick={() => setTableMode(false)}>
            Grid mode
          </SwitchPhotosStyle>
        )}
      </AboveTable>

      {!tableMode ? (
        <PhotosGridDisplay filteredPhoto={filteredPhoto}></PhotosGridDisplay>
      ) : (
        <PhotosTableDisplay filteredPhoto={filteredPhoto}></PhotosTableDisplay>
      )}
    </>
  );
};
Grid.propTypes = {
  gridPhotos: PropTypes.array.isRequired,
  maxLength: PropTypes.number.isRequired,
};
export default Grid;
