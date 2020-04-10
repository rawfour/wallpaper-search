import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
  skeleton: {
    margin: '10px',
  },
}));

const SklepetonComponent = ({ times }) => {
  const classes = useStyles();

  const renderSkeleton = () => {
    const items = [];
    for (let i = 0; i < times; i += 1) {
      items.push(
        <Skeleton
          key={i}
          className={classes.skeleton}
          variant="rect"
          width={Math.floor(Math.random() * 10) + 1 > 5 ? 400 : 178}
          height={267}
        />,
      );
    }
    return items;
  };

  return <>{renderSkeleton()}</>;
};

SklepetonComponent.propTypes = {
  times: PropTypes.number.isRequired,
};

export default SklepetonComponent;
