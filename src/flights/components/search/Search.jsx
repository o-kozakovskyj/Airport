import React, { useState } from 'react';
import './search.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dateUrlSelector, searchParamsSelector, typeUrlSelector } from '../../flights.selectors';
import * as flightActions from '../../flights.actions';

const Search = ({ dateUrl, typeUrl, searchParams, flightsSearchParams }) => {
  const [params, setParams] = useState(searchParams);
  return (
    <div className="search">
      <h2 className="search__title">Search flight</h2>
      <div className="search__container">
        <i className="fas fa-search search__icon"></i>
        <form className="search__form">
          <input
            value={params}
            type="text"
            placeholder="Airline, destination or flight #"
            className="search__input"
            onChange={e => setParams(e.target.value)}
          ></input>
          <Link
            className="search__button"
            to={`/${typeUrl}?date=${dateUrl}${params ? `&search=${params}` : ''}`}
            onClick={() => flightsSearchParams(params)}
          >
            Search
          </Link>
        </form>
      </div>
    </div>
  );
};
const mapState = state => ({
  dateUrl: dateUrlSelector(state),
  typeUrl: typeUrlSelector(state),
  searchParams: searchParamsSelector(state),
});
const mapDispatch = {
  flightsSearchParams: flightActions.flightsSearchParams,
};
export default connect(mapState, mapDispatch)(Search);
