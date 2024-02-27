 //Action Types
 export enum CartTypes {

    LOAD_REQUEST = '@cart/LOAD_REQUEST',
    LOAD_SUCCESS = '@cart/LOAD_SUCCESS',
    LOAD_FAILURE = '@cart/LOAD_FAILURE',

    ADD_REQUEST = '@cart/ADD_REQUEST',
    ADD_SUCCESS = '@cart/ADD_SUCCESS',
    ADD_FAILURE = '@cart/ADD_FAILURE',
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

export interface addSuccess{
  tickets: Ticket;
  page: number;
}

export interface loadSuccess {
  tickets: Ticket[];
  page: number;
}

//State type
export interface CartState {
  readonly tickets: Ticket[];

  readonly error: boolean;
  readonly loading: boolean;
}