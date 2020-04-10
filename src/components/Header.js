import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Sidebar from 'components/Sidebar';
import { Link } from 'react-router-dom';
import { fetchImagesByTyping as fetchImagesByTypingAction } from 'services/wallpaperList/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  title_inner: {
    color: 'white',
    textDecoration: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    backgroundColor: 'transparent',
    border: 'none',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#939a9d',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const Header = ({ fetchImagesByTyping }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchImagesByTyping(searchInput);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Sidebar />
          <Typography className={classes.title} variant="h6" noWrap>
            <Typography
              component={Link}
              to={`${process.env.PUBLIC_URL}/`}
              variant="span"
              className={classes.title_inner}
            >
              Wallpaper search
            </Typography>
          </Typography>
          <form onSubmit={handleSearchSubmit} className={classes.search}>
            <button type="submit" className={classes.searchIcon}>
              <SearchIcon />
            </button>
            <InputBase
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
              placeholder="Type keyword..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  fetchImagesByTyping: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchImagesByTyping: (searchInput) => dispatch(fetchImagesByTypingAction(searchInput)),
});

export default connect(null, mapDispatchToProps)(Header);

// fetchImagesByTyping
