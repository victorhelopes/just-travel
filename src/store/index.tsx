import { Store, createStore, applyMiddleware } from "@reduxjs/toolkit";
import CreateSagaMiddleware from 'redux-saga';

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

import { TicketState } from "./ducks/tickets/types";

export interface ApplicationState {
  tickets: TicketState;
}

const sagaMiddleware = CreateSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;