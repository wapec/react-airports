import { GET_AIRPORTS } from './mainTypes';

export const getAirportsAction = (callback?: () => void) => ({
  type: GET_AIRPORTS,
  callback,
});
