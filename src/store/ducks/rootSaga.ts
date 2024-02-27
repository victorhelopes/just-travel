import { all, takeLatest } from 'redux-saga/effects'

import { TicketsTypes } from './tickets/types'
import { load } from './tickets/sagas';

export default function* rootSaga(): Generator{
    return yield all([
        takeLatest(TicketsTypes.LOAD_REQUEST, load),
    ]);
}