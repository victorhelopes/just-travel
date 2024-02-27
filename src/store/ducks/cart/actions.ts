import { action } from "typesafe-actions";
import { CartTypes, Ticket } from "./types";

//Get a tickets
export const loadCartRequest = () => action(CartTypes.LOAD_REQUEST);

export const loadCartSuccess = () => action(CartTypes.LOAD_SUCCESS);

export const loadCartFailure = () => action(CartTypes.LOAD_FAILURE);

//Get a tickets
export const addCartRequest = (data: Ticket) => action(CartTypes.ADD_REQUEST, data);

export const addCartSuccess = (data: Ticket) => action(CartTypes.ADD_SUCCESS, data);

export const addCartFailure = () => action(CartTypes.ADD_FAILURE);