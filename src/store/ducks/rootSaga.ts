import { all, takeLatest } from 'redux-saga/effects'

import { TicketsTypes } from './tickets/types'
import { load } from './tickets/sagas';
import { getCart } from './cart/sagas';
import { CartTypes } from './cart/types';
import { addCart } from './cart/sagas';

export default function* rootSaga(): Generator{
    return yield all([
        takeLatest(TicketsTypes.LOAD_REQUEST, load),
        takeLatest(CartTypes.LOAD_REQUEST, getCart),
        takeLatest(CartTypes.ADD_REQUEST, addCart),
    ]);
}