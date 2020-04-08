import { combineReducers } from 'redux';
// import wallpaperListReducer from 'services/wallpaperList/reducer';
import errorReducer from 'services/error/reducer';

export default combineReducers({
  // wallpaperList: wallpaperListReducer,
  error: errorReducer,
});
