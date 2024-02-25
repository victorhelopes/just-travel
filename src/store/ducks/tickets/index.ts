import { Reducer } from "@reduxjs/toolkit";
import { Ticket, TicketState, TicketsTypes, loadSuccess } from "./types";

const INITIAL_STATE: TicketState = {
    tickets: [],
    error: false,
    page: 1,
    limit: 6,
    name: '',
    loading: false,
}

const reducer: Reducer<TicketState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TicketsTypes.LOAD_REQUEST:
            return { ...state, loading: true}

        case TicketsTypes.LOAD_SUCCESS:
            const resultLoadRequest = action.payload as loadSuccess
            const { tickets } = resultLoadRequest;
            return { ...state, loading: false, error: false, tickets}

        case TicketsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: []}

        default: 
            return state;
    }
}

export default reducer;