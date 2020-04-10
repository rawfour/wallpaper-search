import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { handleItemButton as handleItemButtonAction } from 'services/wallpaperList/actions';
import { connect } from 'react-redux';

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledItemwrapper = styled.div`
  height: 267px;
  max-width: 100%;
  opacity: 0;
  position: relative;
  animation: ${fade} 1s 0.5s forwards;
  margin: 10px;
  transition: 0.2s;
  &:hover {
    transform: scale(1.04);
  }
`;

const useStyles = makeStyles(() => ({
  imgItem: {
    height: '100%',
    maxWidth: '100%',
  },
  iconItem: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    minWidth: 'auto',
  },
  icon: {
    color: '#ff7373',
  },
}));

const ListItem = ({ item, handleItemButton, favList }) => {
  const { urls, alt_description } = item;
  const classes = useStyles();

  return (
    <StyledItemwrapper onClick={() => handleItemButton(item)}>
      <ListItemIcon className={classes.iconItem}>
        {favList.some((image) => image.id === item.id) ? (
          <FavoriteIcon className={classes.icon} />
        ) : (
          <FavoriteBorderIcon className={classes.icon} />
        )}
      </ListItemIcon>
      <img className={classes.imgItem} src={urls.small} alt={alt_description} />
    </StyledItemwrapper>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape().isRequired,
  handleItemButton: PropTypes.func.isRequired,
  favList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  favList: state.wallpaperList.favList,
});

const mapDispatchToProps = (dispatch) => ({
  handleItemButton: (item) => dispatch(handleItemButtonAction(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
