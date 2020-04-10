import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { fetchCountry as fetchCountryAction } from 'services/wallpaperList/actions';
import SklepetonComponent from 'components/Skeleton';
import SearchingResult from 'components/SearchingResult';

const useStyles = makeStyles(() => ({
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const WallpaperList = ({ fetchCountry, images, loading }) => {
  const classes = useStyles();

  const setLocation = (position) => {
    fetchCountry(position.coords.latitude, position.coords.longitude);
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    if (!images) {
      detectLocation();
    }
  }, []);

  return (
    <>
      <div className={classes.listWrapper}>
        {loading ? <SklepetonComponent times={10} /> : <SearchingResult images={images} />}
      </div>
    </>
  );
};

WallpaperList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape()),
  loading: PropTypes.bool.isRequired,
  fetchCountry: PropTypes.func.isRequired,
};

WallpaperList.defaultProps = {
  images: null,
};

const mapStateToProps = (state) => ({
  images: state.wallpaperList.imageList,
  loading: state.wallpaperList.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountry: (latitude, longitude) => dispatch(fetchCountryAction(latitude, longitude)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WallpaperList);
