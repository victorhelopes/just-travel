import { combineReducers } from 'redux';

import tickets from './tickets';
import cart from './cart';

export default combineReducers({
    tickets,
    cart,
});