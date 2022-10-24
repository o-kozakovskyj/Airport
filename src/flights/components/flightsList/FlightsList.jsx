import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFlightsList } from '../../flights.actions';
import { dateUrlSelector, flightsListSelector } from '../../flights.selectors';
import Flight from '../flight/Flight';
import './flightsList.scss';

const FlightsList = ({ getFlights, match, flightsList, dateUrl }) => {
  // if (window.location.href.includes('search')) {
  //   const flightToFind = window.location.href.split('search')[1].replace('=', '', 1);
  //   const flightsToDisplay = flightsList.find(flight => {
  //     const flightNumber = `${flight.airline.en.logoName}${flight.airline.en.name}`;
  //     if (flightNumber === flightToFind) {
  //       return <Flight {...flight} key={flight.ID} />
  //     }
  //   }

  // } else {

  // }

  useEffect(() => {
    getFlights(match.url.replace('/', '', 1), dateUrl);
  }, [dateUrl, match.url]);
  if (flightsList.length === 0) {
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
      <tbody>
        {flightsList.map(flight => (
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
