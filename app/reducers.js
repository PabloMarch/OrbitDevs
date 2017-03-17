import { combineReducers } from 'redux';
import { orbital } from 'games/orbital/reducer';

const rootReducer = combineReducers({
  orbital
});

export default rootReducer;
