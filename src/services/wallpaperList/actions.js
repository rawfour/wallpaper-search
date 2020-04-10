import axios from 'axios';
import {
  FETCH_IMAGES_BEGINE,
  FETCH_IMAGES_DONE,
  HANDLE_ITEM_BUTTON,
  CLEAR_ERROR,
  SET_ERROR,
} from 'services/actionTypes';
import history from 'history.js';

const unsplashApiKey = process.env.REACT_APP_API_KEY;
const googlMapsApiKey = process.env.REACT_APP_GMAPS_API_KEY;

export const fetchImagesByTyping = (tag) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_IMAGES_BEGINE });
    history.push(`${process.env.PUBLIC_URL}/`);
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashApiKey}&query=${tag}`,
    );
    await setTimeout(() => {
      dispatch({
        type: FETCH_IMAGES_DONE,
        payload: res.data.results,
      });
    }, 2000);
  } catch (error) {
    dispatch({ type: SET_ERROR });
    history.push(`${process.env.PUBLIC_URL}/error`);
  }
};

export const fetchCountry = (latitude, longitude) => async (dispatch) => {
  try {
    const location = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googlMapsApiKey}`,
    );
    const loactionResults = location.data.results;
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${unsplashApiKey}&query=${
        loactionResults[loactionResults.length - 1].formatted_address
      }`,
    );
    dispatch({
      type: FETCH_IMAGES_DONE,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({ type: SET_ERROR });
    history.push(`${process.env.PUBLIC_URL}/error`);
  }
};

export const handleItemButton = (item) => {
  return (dispatch, getState) => {
    const currentFavList = getState().wallpaperList.favList;
    let newFavList;
    let itemExist;
    if (currentFavList.some((image) => image.id === item.id)) {
      itemExist = true;
    } else {
      itemExist = false;
    }

    if (itemExist) {
      newFavList = currentFavList.filter((image) => image.id !== item.id);
    } else {
      newFavList = [...currentFavList, item];
    }

    dispatch({ type: HANDLE_ITEM_BUTTON, payload: newFavList });
  };
};

export const clearError = () => ({ type: CLEAR_ERROR });
