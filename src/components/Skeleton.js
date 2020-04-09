import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(() => ({
  skeleton: {
    margin: '10px',
  },
}));

const SklepetonComponent = () => {
  const classes = useStyles();

  //   const renderSkeleton = () => {
  //     let skeleton = []
  //     for(let i = 0; i < times; i += 1){
  //         skeleton=[...skeleton, <Skeleton className={classes.skeleton} variant="rect" width={400} height={(Math.floor(Math.random() * 10) +1) > 5 ? 600 : 300} />]
  //     }
  //     return (
  //         {skeleton.map(item=> )}
  //     )
  //   }

  return (
    <>
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
      <Skeleton
        className={classes.skeleton}
        variant="rect"
        width={400}
        height={Math.floor(Math.random() * 10) + 1 > 5 ? 600 : 300}
      />
    </>
  );
};

// SklepetonComponent.propTypes = {
//   times: PropTypes.number.isRequired,
// };

export default SklepetonComponent;
