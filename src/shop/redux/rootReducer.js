import { combineReducers } from 'redux';

import { userReducer } from './user/userReducer';
import { cartReducer } from './cart/cartReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});
