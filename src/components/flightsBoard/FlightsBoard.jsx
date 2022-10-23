import React from 'react';
import { connect } from 'react-redux';
import './flightsBoard.scss';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import FlightsList from '../FlightsList/FlightsList';
import Search from '../search/Search';
import ActionDate from '../date/ActionDate';
import { dateUrlSelector, typeUrlSelector } from '../../flights.selectors';

const FlightsBoard = ({ dateUrl, typeUrl }) => {
  console.log(1);
  return (
    <BrowserRouter>
      <Search />
      <div className="board">
        <Link
          className="board__btn board__departures"
          to={`/departure?date=${dateUrl}`}
          style={{ zIndex: '1' }}
        >
          <i className="fas fa-plane-departure board__icon"></i>
          <span>Departures</span>
        </Link>
        <Link
          className="board__btn board__arrivals"
          to={`/arrival?date=${dateUrl}`}
          style={{ zIndex: '2' }}
        >
          <i className="fas fa-plane-arrival board__icon"></i>
          <span>Arrivals</span>
        </Link>
      </div>
      <ActionDate />
      <Redirect to={`/${typeUrl}?date=${dateUrl}`} component={FlightsList} />
      <Route path="/departure" component={FlightsList} />
      <Route path="/arrival" component={FlightsList} />
    </BrowserRouter>
  );
};
const mapState = state => ({
  dateUrl: dateUrlSelector(state),
  typeUrl: typeUrlSelector(state),
});
export default connect(mapState)(FlightsBoard);
