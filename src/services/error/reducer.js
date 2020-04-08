import { CLEAR_ERROR, SET_ERROR } from 'services/actionTypes';

const initialState = {
  error: false,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: true };
    case CLEAR_ERROR:
      return { ...state, error: false };
    default:
      return state;
  }
};

export default errorReducer;
