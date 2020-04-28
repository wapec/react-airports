import { IEntryConfig } from '../utils/models';

export const AIRPORTS_ENTRIES: IEntryConfig = {
  0: 'id', //	Unique OpenFlights identifier for this airport.
  1: 'name', //Name of airport. May or may not contain the City name.
  2: 'city', //	Main city served by airport. May be spelled differently from Name.
  3: 'country', //	Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
  4: 'iata', //	3-letter IATA code. Null if not assigned/unknown.
  5: 'icao', //	4-letter ICAO code. Null if not assigned.
  6: 'lat', //	Decimal degrees, usually to six significant digits. Negative is South, positive is North.
  7: 'lng', //	Decimal degrees, usually to six significant digits. Negative is West, positive is East.
  8: 'altitude', //	In feet.
  9: 'timezone', //	Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
  10: 'dst', //	Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
  11: 'tz', // Tz database time zone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".
  12: 'type', //	Type of the airport. Value "airport" for air terminals, "station" for train stations, "port" for ferry terminals and "unknown" if not known. In airports.csv, only type=airport is included.
  13: 'source', //	Source of this data. "OurAirports" for data sourced from OurAirports, "Legacy" for old data not matched to OurAirports (mostly DAFIF), "User" for unverified user contributions. In airports.csv, only source=OurAirports is included.
};

export const ROUTES_ENTRIES: IEntryConfig = {
  0: 'airline', // 2-letter (IATA) or 3-letter (ICAO) code of the airline.
  1: 'airlineId', // Unique OpenFlights identifier for airline (see Airline).
  2: 'sourceAirport', //	3-letter (IATA) or 4-letter (ICAO) code of the source airport.
  3: 'sourceAirportId', //	Unique OpenFlights identifier for source airport (see Airport)
  4: 'destinationAirport', //	3-letter (IATA) or 4-letter (ICAO) code of the destination airport.
  5: 'destinationAirportId', //	Unique OpenFlights identifier for destination airport (see Airport)
  6: 'codeShare', //	"Y" if this flight is a codeshare (that is, not operated by Airline, but another carrier), empty otherwise.
  7: 'stops', //	Number of stops on this flight ("0" for direct)
  8: 'equipment', //	3-letter codes for plane type(s) generally used on this flight, separated by spaces
};
