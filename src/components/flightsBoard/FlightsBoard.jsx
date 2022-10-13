import React from 'react';
import './flightsBoard.scss';
import { Link } from 'react-router-dom';

const FlightsBoard = ({ zIndexA, zIndexD }) => {
  console.log(zIndexA, zIndexD);
  return (
    <>
      <div className="board">
        <Link className="board__btn board__departures" to="/depatures" style={{ zIndex: zIndexD }}>
          <i className="fas fa-plane-departure board__icon"></i>
          <span>Departures</span>
        </Link>

        <Link className="board__btn board__arrivals" to="/arrivals" style={{ zIndex: zIndexA }}>
          <i className="fas fa-plane-arrival board__icon"></i>
          <span>Arrivals</span>
        </Link>
      </div>
      <div className="date-box">
        <div className="date-box__calendar">
          <span className="date-box__calendar-date">11/05</span>
          <input type="date" className="date-box__input" />
        </div>
        <div className="date-box__days">
          <span className="date-box__days-title">11/10</span>
          <button className="date-box__days-btn">Yesterday</button>
        </div>
        <div className="date-box__days">
          <span className="date-box__days-title">11/10</span>
          <button className="date-box__days-btn">Today</button>
        </div>
        <div className="date-box__days">
          <span className="date-box__days-title">11/10</span>
          <button className="date-box__days-btn">Tomorrow</button>
        </div>
      </div>
    </>
  );
};

export default FlightsBoard;
