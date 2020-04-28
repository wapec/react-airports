import { AxiosError } from 'axios';

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

export type mainTypes =
  | IGetAirportsAction
  | IGetAirportsSuccessAction
  | IGetAirportsFailAction;
