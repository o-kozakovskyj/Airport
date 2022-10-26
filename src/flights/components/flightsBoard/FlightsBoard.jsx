import React from 'react';
import { connect } from 'react-redux';
import './flightsBoard.scss';
import { Link, Route, Redirect } from 'react-router-dom';
import FlightsList from '../FlightsList/FlightsList';
import Search from '../search/Search';
import DateSearch from '../dateSearch/DateSearch';
import { dateUrlSelector, typeUrlSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';

const FlightsBoard = ({ dateUrl, typeUrl, flightsTypeUrl }) => {
  let activeBtnZIndex;
  let departureClass;
  let arriveClass;
  if (typeUrl === 'departure') {
    departureClass = 'board__btn board__departures board__btn-active';
    arriveClass = 'board__btn board__arrivals';
    activeBtnZIndex = 3;
  } else {
    departureClass = 'board__btn board__departures';
    arriveClass = 'board__btn board__arrivals board__btn-active';
    activeBtnZIndex = 1;
  }
  return (
    <>
      <Search />
      <div className="board">
        <Link
          className={departureClass}
          to={`/departure?date=${dateUrl}`}
          style={{ zIndex: activeBtnZIndex }}
          onClick={() => flightsTypeUrl('departure')}
        >
          <i className="fas fa-plane-departure board__icon"></i>
          <span>Departures</span>
        </Link>
        <Link
          className={arriveClass}
          to={`/arrival?date=${dateUrl}`}
          onClick={() => flightsTypeUrl('arrival')}
        >
          <i className="fas fa-plane-arrival board__icon"></i>
          <span>Arrivals</span>
        </Link>
      </div>
      <DateSearch />
      <Redirect to={`/${typeUrl}?date=${dateUrl}`} component={FlightsList} />
      <Route path="/departure" component={FlightsList} />
      <Route path="/arrival" component={FlightsList} />
    </>
  );
};
const mapState = state => ({
  dateUrl: dateUrlSelector(state),
  typeUrl: typeUrlSelector(state),
});
const mapDispatch = {
  flightsTypeUrl: flightsActions.flightsTypeUrl,
};
export default connect(mapState, mapDispatch)(FlightsBoard);
