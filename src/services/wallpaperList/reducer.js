import {
  FETCH_IMAGES_BEGINE,
  FETCH_IMAGES_DONE,
  CLEAR_ERROR,
  SET_ERROR,
} from 'services/actionTypes';

const initialState = {
  imageList: null,
  loading: false,
  error: false,
};

const wallpaperListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_BEGINE:
      return { ...state, loading: true, imageList: null };
    case FETCH_IMAGES_DONE:
      return { ...state, loading: false, imageList: action.payload };
    case SET_ERROR:
      return { ...state, error: true };
    case CLEAR_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default wallpaperListReducer;
