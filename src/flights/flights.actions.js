import fetchFlightsList from '../gateway/flights';

export const FLIGHTS_LOADED = 'FLGHTS_LOADED';
export const FLGHTS_DATE_URL = 'FLGHTS_DATE_URL';
export const FLIGHTS_TYPE_URL = 'FLIGHTS_TYPE_URL';
export const FLGHTS_SEARCH_PARAMS = 'FLGHTS_SEARCH_PARAMS';

export const flightsDateUrl = dataUrl => {
  const action = {
    type: FLGHTS_DATE_URL,
    payload: dataUrl,
  };
  return action;
};
export const flightsTypeUrl = typeUrl => {
  const action = {
    type: FLIGHTS_TYPE_URL,
    payload: typeUrl,
  };
  return action;
};
export const flightsLoaded = flightsList => {
  const action = {
    type: FLIGHTS_LOADED,
    payload: flightsList,
  };
  return action;
};
export const flightsSearchParams = searchParams => {
  const action = {
    type: FLGHTS_SEARCH_PARAMS,
    payload: searchParams,
  };
  return action;
};

export const getFlightsList = (typeUrl, dateUrl) => {
  const thunkActions = dispatch => {
    fetchFlightsList(dateUrl).then(flights => dispatch(flightsLoaded(flights.body[typeUrl])));
  };
  return thunkActions;
};
