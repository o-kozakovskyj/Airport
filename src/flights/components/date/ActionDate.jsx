import React from 'react';
import './date.scss';
import moment from 'moment';
import { connect } from 'react-redux';
import { flightsDateUrl, getFlightsList } from '../../flights.actions';
import { dateUrlSelector } from '../../flights.selectors';

const ActionDate = ({ getFlightsUrl, parthDate }) => {
  console.log(parthDate);
  const today = moment();
  const tomorrow = moment().add(1, 'd');
  const yesterday = moment().subtract(1, 'days');

  return (
    <div className="date-box">
      <div className="date-box__calendar">
        <span className="date-box__calendar-date">{parthDate}</span>
        <input
          type="date"
          className="date-box__input"
          value={parthDate}
          onChange={e => getFlightsUrl(moment(e.target.value).format('YY-MM-DD'))}
        />
      </div>
      <div className="date-box__days">
        <span className="date-box__days-title">{moment(yesterday).format('MM/DD')}</span>
        <button
          className="date-box__days-btn"
          onClick={() => getFlightsUrl(moment(yesterday).format('YY-MM-DD'))}
        >
          Yesterday
        </button>
      </div>
      <div className="date-box__days">
        <span className="date-box__days-title">{moment(today).format('MM/DD')}</span>
        <button
          className="date-box__days-btn"
          onClick={() => getFlightsUrl(moment(today).format('YY-MM-DD'))}
        >
          Today
        </button>
      </div>
      <div className="date-box__days">
        <span className="date-box__days-title">{moment(tomorrow).format('MM/DD')}</span>
        <button
          className="date-box__days-btn"
          onClick={() => getFlightsUrl(moment(tomorrow).format('YY-MM-DD'))}
        >
          Tomorrow
        </button>
      </div>
    </div>
  );
};
const mapState = state => ({
  parthDate: dateUrlSelector(state),
});
const mapDispatch = {
  getFlightsUrl: flightsDateUrl,
  getFlights: getFlightsList,
};

export default connect(mapState, mapDispatch)(ActionDate);
