import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  error: {
    marginTop: '40px',
    display: 'block',
    textAlign: 'center',
    fontSize: '1.50rem',
    color: '#aaa',
  },
}));

const ErrorPage = () => {
  const classes = useStyles();
  return (
    <p className={classes.error}>
      Something went wrong...
      <span role="img" aria-label="cry_face">
        😥
      </span>
    </p>
  );
};

export default ErrorPage;
