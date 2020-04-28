import { AxiosError } from 'axios';

export interface IWithId {
  id: string | number;
}

export interface IWithKey {
  key: string | number;
}

export interface IWithName {
  name: string | JSX.Element;
}

export interface IWithValue<T> {
  value: T;
}

export interface IWithLoaded {
  _loaded: boolean;
}

export interface IWithPending {
  _pending: boolean;
}

export interface IWithError {
  _error: AxiosError | null;
}

export interface IEntryConfig {
  [key: number]: string;
}
