import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchImages as fetchImagesAction } from 'services/wallpaperList/actions';
import SklepetonComponent from '../components/Skeleton';

const useStyles = makeStyles(() => ({
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledImgItem = styled.img`
  opacity: 0;
  animation: ${fade} 1s 0.5s forwards;
  margin: 10px;
`;

const WallpaperList = ({ fetchImages, images, loading }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  let content;
  if (loading) {
    content = (
      <>
        <SklepetonComponent />
      </>
    );
  } else if (images) {
    content = (
      <>
        {images.map((item) => (
          <StyledImgItem src={item.urls.small} alt={item.alt_description} key={item.id} />
        ))}
      </>
    );
  }

  return (
    <>
      <div className={classes.listWrapper}>{content}</div>
    </>
  );
};

WallpaperList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool.isRequired,
  fetchImages: PropTypes.func.isRequired,
};

WallpaperList.defaultProps = {
  images: null,
};

const mapStateToProps = (state) => ({
  images: state.wallpaperList.imageList,
  loading: state.wallpaperList.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchImages: () => dispatch(fetchImagesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WallpaperList);
