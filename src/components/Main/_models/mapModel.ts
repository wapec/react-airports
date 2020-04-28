export interface IMarker extends IPosition {
  id: string;
  info: string;
}

export interface IPosition {
  lat: number;
  lng: number;
}
