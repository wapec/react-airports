export const SET_SEARCH = '[@@Search] SET_SEARCH';
export const SET_SEARCH_SUCCESS = '[@@Search] SET_SEARCH_SUCCESS';
export const SET_SEARCH_FAIL = '[@@Search] SET_SEARCH_FAIL';

export interface ISetSearchAction {
  type: typeof SET_SEARCH;
  payload: any;
}

export type searchTypes = ISetSearchAction;
