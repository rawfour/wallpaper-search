import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      500: '#263238',
    },
  },
  status: {
    danger: 'orange',
  },
});

const MainTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MainTheme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTheme;
