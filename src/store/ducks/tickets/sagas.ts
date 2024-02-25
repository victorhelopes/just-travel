import { call, put } from 'redux-saga/effects';

import { api } from '../../../services';

import { loadFailure, loadSuccess } from './actions';
import { Ticket } from './types';

export function* load(data: any){
    const { name, page, limit } = data.payload.data;
    try {
        const response:  {data: Ticket[]} = yield call(api.get, `/tickets?name=${name}&page=${page}&limit=${limit}`)
        yield put(loadSuccess(response.data, page))
    }catch(err) {
        yield put(loadFailure())
    }
}