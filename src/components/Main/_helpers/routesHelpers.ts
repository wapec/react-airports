import { IAirport, IRoute } from '../_models/airportModel';

export const getAllDestinations = (
  airport: IAirport,
  routes: IRoute[],
): IRoute[] => {
  return routes.filter(
    ({ destinationAirport }) => destinationAirport === airport.iata,
  );
};
