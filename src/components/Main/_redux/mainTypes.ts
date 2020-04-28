import { AxiosError } from 'axios';

// GET_AIRPORTS
export const GET_AIRPORTS = '[@@Map] GET_AIRPORTS';
export const GET_AIRPORTS_SUCCESS = '[@@Map] GET_AIRPORTS_SUCCESS';
export const GET_AIRPORTS_FAIL = '[@@Map] GET_AIRPORTS_FAIL';

export interface IGetAirportsAction {
  type: typeof GET_AIRPORTS;
  payload: any;
}

export interface IGetAirportsSuccessAction {
  type: typeof GET_AIRPORTS_SUCCESS;
  payload: any;
}

export interface IGetAirportsFailAction {
  type: typeof GET_AIRPORTS_FAIL;
  payload: AxiosError;
}

// GET_ROUTES
export const GET_ROUTES = '[@@Map] GET_ROUTES';
export const GET_ROUTES_SUCCESS = '[@@Map] GET_ROUTES_SUCCESS';
export const GET_ROUTES_FAIL = '[@@Map] GET_ROUTES_FAIL';

export interface IGetRoutesAction {
  type: typeof GET_ROUTES;
  payload: any;
}

export interface IGetRoutesSuccessAction {
  type: typeof GET_ROUTES_SUCCESS;
  payload: any;
}

export interface IGetRoutesFailAction {
  type: typeof GET_ROUTES_FAIL;
  payload: AxiosError;
}

export type mainTypes =
  | IGetRoutesAction
  | IGetRoutesSuccessAction
  | IGetRoutesFailAction
  | IGetAirportsAction
  | IGetAirportsSuccessAction
  | IGetAirportsFailAction;
