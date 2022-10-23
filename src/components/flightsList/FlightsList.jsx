import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFlightsList } from '../../flights.actions';
import { dateUrlSelector, flightsListSelector } from '../../flights.selectors';
import Flight from '../flight/Flight';
import './flightsList.scss';

const FlightsList = props => {
  useEffect(() => {
    props.getFlights(props.match.url.replace('/', '', 1), props.dateUrl);
  }, [props.dateUrl, props.match.url]);
  if (props.flightsList.length === 0) {
    return <div className="flights-table flights-table__not-found">No Flights found</div>;
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
          <th className="flights-table__header"> </th>
        </tr>
      </thead>
      <tbody>
        {props.flightsList.map(flight => (
          <Flight {...flight} key={flight.ID} />
        ))}
      </tbody>
    </table>
  );
};

const mapState = state => ({
  flightsList: flightsListSelector(state),
  dateUrl: dateUrlSelector(state),
});
const mapDispatch = {
  getFlights: getFlightsList,
};

export default connect(mapState, mapDispatch)(FlightsList);
