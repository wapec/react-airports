import { SET_SEARCH } from './searchTypes';

export const setSearchAction = (payload: any[], callback?: () => void) => {
  return {
    type: SET_SEARCH,
    payload,
    callback,
  };
};
