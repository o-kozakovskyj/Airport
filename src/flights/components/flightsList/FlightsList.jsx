import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getFlightsList } from '../../flights.actions';
import {
  dateUrlSelector,
  flightsListSelector,
  typeUrlSelector,
  flightSelector,
  searchParamsSelector,
} from '../../flights.selectors';
import Flight from '../flight/Flight';
import './flightsList.scss';

const FlightsList = ({ getFlights, flightsList, dateUrl, typeUrl, searchFlight, searchParams }) => {
  useEffect(() => {
    getFlights(typeUrl, dateUrl);
  }, [dateUrl, typeUrl]);
  const flightsToShow =
    searchParams === ''
      ? flightsList.map(flight => <Flight {...flight} key={flight.ID} />)
      : searchFlight && <Flight {...searchFlight} />;

  if (!flightsToShow || flightsToShow.length === 0) {
    return <div className="flights-table flights-table__not-found">No flights</div>;
  }
  return (
    <table className="flights-table">
      <thead>
        <tr>
          <th className="flights-table__header">Terminal</th>
          <th className="flights-table__header">Local time</th>
          <th className="flights-table__header">Destination</th>
          <th className="flights-table__header">Status</th>
          <th className="flights-table__header">Airline</th>
          <th className="flights-table__header">Flight</th>
          <th className="flights-table__header flights-table__hidden">Details</th>
        </tr>
      </thead>
      <tbody>{flightsToShow}</tbody>
    </table>
  );
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
  dateUrl: dateUrlSelector(state),
  typeUrl: typeUrlSelector(state),
  searchParams: searchParamsSelector(state),
  searchFlight: flightSelector(state),
});
const mapDispatch = {
  getFlights: getFlightsList,
};
FlightsList.propTypes = {
  getFlights: PropTypes.func.isRequired,
  flightsList: PropTypes.arrayOf(PropTypes.shape()),
  searchFlight: PropTypes.shape(),
  dateUrl: PropTypes.string,
  typeUrl: PropTypes.string,
  searchParams: PropTypes.string,
};
FlightsList.defaultValue = {
  dateUrl: moment().format('MM-DD'),
  typeUrl: 'departure',
  searchParams: '',
  searchFlight: null,
};
export default connect(mapState, mapDispatch)(FlightsList);
