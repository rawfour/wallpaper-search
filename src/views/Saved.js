import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(() => ({
  listWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

const Saved = ({ favList }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.listWrapper}>
        {favList.length > 0 ? (
          favList.map((item) => <ListItem item={item} key={item.id} />)
        ) : (
          <StyledNotFoundInfo>No wallpapers saved...</StyledNotFoundInfo>
        )}
      </div>
    </>
  );
};

Saved.propTypes = {
  favList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = (state) => ({
  favList: state.wallpaperList.favList,
});

export default connect(mapStateToProps, null)(Saved);
