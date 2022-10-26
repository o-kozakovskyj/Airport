import React from 'react';
import './dateSearch.scss';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flightsDateUrl } from '../../flights.actions';
import { dateUrlSelector } from '../../flights.selectors';
import ClosestDays from './ClosestDays';

const DateSearch = ({ getFlightsUrl, parthDate }) => (
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
    <ClosestDays date={moment().subtract(1, 'days')} dayName={'Yesterday'} />
    <ClosestDays date={moment()} dayName={'Today'} />
    <ClosestDays date={moment().add(1, 'd')} dayName={'Tomorrow'} />
  </div>
);
const mapState = state => ({
  parthDate: dateUrlSelector(state),
});
const mapDispatch = {
  getFlightsUrl: flightsDateUrl,
};
DateSearch.propTypes = {
  getFlightsUrl: PropTypes.func.isRequired,
  parthDate: PropTypes.string,
};
DateSearch.defaultValue = {
  parthDate: '',
};
export default connect(mapState, mapDispatch)(DateSearch);
