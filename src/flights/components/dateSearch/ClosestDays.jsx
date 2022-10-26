import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flightsDateUrl } from '../../flights.actions';
import './dateSearch.scss';

const ClosestDays = ({ date, getFlightsUrl, dayName }) => (
  <div className="date-box__days">
    <span className="date-box__days-title">{moment(date).format('MM/DD')}</span>
    <button
      className="date-box__days-btn"
      onClick={() => getFlightsUrl(moment(date).format('YY-MM-DD'))}
    >
      {dayName}
    </button>
  </div>
);
const mapDispatch = {
  getFlightsUrl: flightsDateUrl,
};
ClosestDays.propTypes = {
  getFlightsUrl: PropTypes.func.isRequired,
  date: PropTypes.shape().isRequired,
  dayName: PropTypes.string.isRequired,
};

export default connect(null, mapDispatch)(ClosestDays);
