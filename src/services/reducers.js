import { combineReducers } from 'redux';
import wallpaperListReducer from 'services/wallpaperList/reducer';

export default combineReducers({
  wallpaperList: wallpaperListReducer,
});
