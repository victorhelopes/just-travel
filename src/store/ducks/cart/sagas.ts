import { put } from 'redux-saga/effects';

import { addCartFailure, addCartSuccess, loadCartFailure, loadCartRequest, loadCartSuccess } from './actions';

export function* getCart(){
    try {
        yield put(loadCartSuccess())
    }catch(err) {
        yield put(loadCartFailure())
    }
}

export function* addCart(data: any){
    try {
        console.log('data: ', data)
        const { ticket } = data.payload.data;
        yield put(addCartSuccess(ticket))
    }catch(err) {
        yield put(addCartFailure())
    }
}