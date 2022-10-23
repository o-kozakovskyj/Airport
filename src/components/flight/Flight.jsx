/* eslint-disable camelcase */
import React from 'react';

const Flight = ({ ...flight }) => {
  const { actual, status, term, timeDepFact } = flight;
  const { airline, codeShare } = flight.codeShareData[0];
  const terminalColor = term === 'A' ? '#63c745' : '#1eb7ee';
  return (
    <tr className="flights-table__row">
      <td className="flights-table__row-item ">
        <div className="flights-table__terminal-box" style={{ color: terminalColor }}>
          <span>{term}</span>
        </div>
      </td>
      <td className="flights-table__row-item">{`${new Date(actual).getUTCHours()}:${new Date(
        actual,
      ).getMinutes()}`}</td>
      <td className="flights-table__row-item">{flight['airportToID.city_en']}</td>
      <td className="flights-table__row-item">{`${status} ${new Date(
        timeDepFact,
      ).getUTCHours()}:${new Date(timeDepFact).getMinutes()}`}</td>
      <td className="flights-table__row-item flights-table__logo">
        <div className="flights-table__img-box">
          <img src={airline.en.logoName} alt="Logo" className="flights-table__img" />
        </div>
        <span>{airline.en.name}</span>
      </td>
      <td className="flights-table__row-item">{codeShare}</td>
    </tr>
  );
};

export default Flight;
