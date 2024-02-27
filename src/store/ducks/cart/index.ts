import { Reducer } from "@reduxjs/toolkit";
import { Ticket, CartState, CartTypes, loadSuccess, addSuccess } from "./types";

const INITIAL_STATE: CartState = {
    tickets: [],
    error: false,
    loading: false,
}

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartTypes.LOAD_REQUEST:
            console.log(state)
            return { ...state, loading: true}

        case CartTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false}

        case CartTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: []}


        case CartTypes.ADD_REQUEST:
            return { ...state, loading: true}
            
            case CartTypes.ADD_SUCCESS:
                const ticket = action.payload as Ticket
                const ticketsOnCart = state.tickets;
                ticketsOnCart.push(ticket)
                return { ...state, loading: false, error: false}    

        case CartTypes.ADD_FAILURE:
            return { ...state, loading: false, error: true, data: []}

        default: 
            return state;
    }
}

export default cart;