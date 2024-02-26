 //Action Types
 export enum TicketsTypes {
    LOAD_REQUEST = '@tickets/LOAD_REQUEST',
    LOAD_SUCCESS = '@tickets/LOAD_SUCCESS',
    LOAD_FAILURE = '@tickets/LOAD_FAILURE',
}
  
//Data Types
export interface Ticket{
    id: string;
    name: string;
    location: string;
    image: string;
    description: string;
    price: IPrice;
    rating: IRating;
    createdAt: string;
    updatedAt: string;
}

export interface IPrice{
    full: number;
    discount: number;
}

export interface IRating{
    reviewsCount: number;
    value: number;
}

export interface loadSuccess {
  tickets: Ticket[];
  name: string;
  page: number;
}

//State type
export interface TicketState {
  readonly tickets: Ticket[];
  
  readonly name: string;
  readonly page: number;
  readonly limit: number;

  readonly error: boolean;
  readonly loading: boolean;
}