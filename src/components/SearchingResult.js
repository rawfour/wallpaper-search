import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledNotFoundInfo = styled.span`
  opacity: 0;
  animation: ${fade} 1s 0.5s forwards;
  margin-top: 40px;
  text-align: center;
  font-size: 1.75rem;
  color: #d5d5d5;
`;

const SearchingResult = ({ images }) => {
  return (
    <>
      {images.length > 0 ? (
        images.map((item) => <ListItem item={item} key={item.id} />)
      ) : (
        <StyledNotFoundInfo>No search results...</StyledNotFoundInfo>
      )}
    </>
  );
};

SearchingResult.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
};

SearchingResult.defaultProps = {
  images: null,
};

export default SearchingResult;
