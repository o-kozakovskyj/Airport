import { createSelector } from 'reselect';

export const flightsListSelector = state => state.flightsList;
export const dateUrlSelector = state => state.dateUrl;
export const typeUrlSelector = state => state.typeUrl;
export const searchParamsSelector = state => state.searchParams;

export const flightSelector = createSelector(
  [flightsListSelector, searchParamsSelector],
  (flightsList, searchParams) =>
    flightsList.find(flight => flight.codeShareData[0].codeShare === searchParams),
);
