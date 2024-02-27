import { Store, createStore, applyMiddleware } from "@reduxjs/toolkit";
import CreateSagaMiddleware from 'redux-saga';

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { TicketState } from "./ducks/tickets/types";
import { CartState } from "./ducks/cart/types";

export interface ApplicationState {
  tickets: TicketState;
  cart: CartState;
}

const sagaMiddleware = CreateSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;