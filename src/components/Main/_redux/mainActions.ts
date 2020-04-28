import { GET_AIRPORTS, GET_ROUTES } from './mainTypes';

export const getAirportsAction = (callback?: () => void) => ({
  type: GET_AIRPORTS,
  callback,
});

export const getRoutesAction = (callback?: () => void) => ({
  type: GET_ROUTES,
  callback,
});
