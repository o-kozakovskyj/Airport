import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Flight = ({ ...flight }) => {
  const { actual, status, term, timeDepFact, timeArrShedule } = flight;
  const { airline, codeShare } = flight.codeShareData[0];
  const terminalColor = term === 'A' ? '#63c745' : '#1eb7ee';
  const destination =
    status === 'DP' ? flight['airportToID.city_en'] : flight['airportFromID.city_en'];
  const flightStatus =
    status === 'DP'
      ? `Depature at ${moment(timeDepFact).format('H:mm')}`
      : `Arrive at ${moment(timeArrShedule).format('H:mm')}`;
  return (
    <tr className="flights-table__row">
      <td className="flights-table__row-item ">
        <div className="flights-table__terminal-box" style={{ color: terminalColor }}>
          <span>{term}</span>
        </div>
      </td>
      <td className="flights-table__row-item">{moment(actual).format('H:mm')}</td>
      <td className="flights-table__row-item">{destination}</td>
      <td className="flights-table__row-item">{flightStatus}</td>
      <td className="flights-table__row-item flights-table__logo">
        <div className="flights-table__img-box">
          <img src={airline.en.logoSmallName} alt="Logo" className="flights-table__img" />
        </div>
        <span className="flights-table__txt">{airline.en.name}</span>
      </td>
      <td className="flights-table__row-item">{codeShare}</td>
      <td className="flights-table__row-item flights-table__hidden">Detais</td>
    </tr>
  );
};
Flight.propTypes = {
  flight: PropTypes.shape(),
};
Flight.defaultValue = {
  flight: {},
};
export default Flight;
