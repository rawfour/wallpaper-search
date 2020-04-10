import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  notFound: {
    marginTop: '40px',
    display: 'block',
    textAlign: 'center',
    fontSize: '1.50rem',
    color: '#aaa',
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <p className={classes.notFound}>
      Page not found...
      <span role="img" aria-label="cry_face">
        😥
      </span>
    </p>
  );
};

export default NotFound;
