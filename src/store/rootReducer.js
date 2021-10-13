import { combineReducers } from 'redux'

import auth from './auth/reducer';
import counter from './counter/reducer';

export default combineReducers({
  auth,
  counter
});