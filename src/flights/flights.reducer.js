import moment from 'moment';
import {
  FLIGHTS_LOADED,
  FLGHTS_DATE_URL,
  FLIGHTS_TYPE_URL,
  FLGHTS_SEARCH_PARAMS,
} from './flights.actions';

const initialState = {
  flightsList: [],
  dateUrl: moment(new Date('2021/10/10')).format('YY-MM-DD'),
  typeUrl: 'departure',
  searchParams: '',
};
const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_LOADED:
      return {
        ...state,
        flightsList: action.payload,
      };
    case FLGHTS_DATE_URL:
      return {
        ...state,
        dateUrl: action.payload,
      };
    case FLIGHTS_TYPE_URL:
      return {
        ...state,
        typeUrl: action.payload,
      };
    case FLGHTS_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: action.payload,
      };
    default:
      return state;
  }
};
export default flightsReducer;
