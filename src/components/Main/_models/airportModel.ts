export interface IAirport {
  id: string; //	Unique OpenFlights identifier for this airport.
  name: string; //Name of airport. May or may not contain the City name.
  city: string; //	Main city served by airport. May be spelled differently from Name.
  country: string; //	Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
  iata: string; //	3-letter IATA code. Null if not assigned/unknown.
  icao: string; //	4-letter ICAO code. Null if not assigned.

  lat: string; //	Decimal degrees, usually to six significant digits. Negative is South, positive is North.
  lng: string; //	Decimal degrees, usually to six significant digits. Negative is West, positive is East.
  altitude: string; //	In feet.
  timezone: string; //	Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
  dst: string; //	Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
  tz: string; // Tz database time zone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".
  type: string; //	Type of the airport. Value "airport" for air terminals, "station" for train stations, "port" for ferry terminals and "unknown" if not known. In airports.csv, only type=airport is included.
  source: string; //	Source of this data. "OurAirports" for data sourced from OurAirports, "Legacy" for old data not matched to OurAirports (mostly DAFIF), "User" for unverified user contributions. In airports.csv, only source=OurAirports is included.
}
