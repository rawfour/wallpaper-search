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
  children: PropTypes.oneOfType([PropTypes.shape(), PropTypes.array]).isRequired,
};

export default MainTheme;
