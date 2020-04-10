import {
  FETCH_IMAGES_BEGINE,
  FETCH_IMAGES_DONE,
  HANDLE_ITEM_BUTTON,
  CLEAR_ERROR,
  SET_ERROR,
} from 'services/actionTypes';

const initialState = {
  imageList: null,
  tag: null,
  favList: [],
  loading: true,
  error: false,
};

const wallpaperListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_BEGINE:
      return { ...state, loading: true };
    case FETCH_IMAGES_DONE:
      return {
        ...state,
        loading: false,
        imageList: action.payload,
      };
    case HANDLE_ITEM_BUTTON:
      return { ...state, favList: action.payload };
    case SET_ERROR:
      return { ...state, error: true };
    case CLEAR_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default wallpaperListReducer;
