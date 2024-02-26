import { action } from "typesafe-actions";
import { Ticket, TicketsTypes } from "./types";

//Get a tickets
export const loadRequest = (data: any) => action(TicketsTypes.LOAD_REQUEST, {data});

export const loadSuccess = (data: Ticket[], page: number, name: string) => action(TicketsTypes.LOAD_SUCCESS, {tickets: data, page: page, name: name});

export const loadFailure = () => action(TicketsTypes.LOAD_FAILURE);