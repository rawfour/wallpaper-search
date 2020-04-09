import axios from 'axios';
import {
  FETCH_IMAGES_BEGINE,
  FETCH_IMAGES_DONE,
  CLEAR_ERROR,
  SET_ERROR,
} from 'services/actionTypes';
import history from 'history.js';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchImages = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_IMAGES_BEGINE });
    const res = await axios.get(`https://api.unsplash.com/photos/?client_id=${apiKey}`);
    await setTimeout(() => {
      dispatch({
        type: FETCH_IMAGES_DONE,
        payload: res.data,
      });
    }, 2000);
  } catch (error) {
    dispatch({ type: SET_ERROR });
    history.push(`${process.env.PUBLIC_URL}/error`);
  }
};

export const clearError = () => ({ type: CLEAR_ERROR });
