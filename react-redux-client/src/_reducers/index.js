import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { nodes } from './nodes.reducer';
import { weathers, weather } from './weathers.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  nodes,
  weathers,
  weather
});

export default rootReducer;
