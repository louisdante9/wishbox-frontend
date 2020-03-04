import { combineReducers } from 'redux';
// import signup from './signup';
import fulfilled from './fulfilled';
import wishes from './wishes';
import slots from './slots';
import setCurrentUser from './setCurrentUser';


const rootReducer = combineReducers({
  setCurrentUser,
  slots,
  fulfilled,
  wishes
});

export default rootReducer;