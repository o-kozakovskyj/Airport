import React, { useState } from 'react';
import './search.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dateUrlSelector, typeUrlSelector } from '../../flights.selectors';

const Search = ({ dateUrl, typeUrl }) => {
  const [searchParams, setSearchParams] = useState('');
  return (
    <div className="search">
      <h2 className="search__title">Search flight</h2>
      <div className="search__container">
        <i className="fas fa-search search__icon"></i>
        <form className="search__form">
          <input
            onChange={e => setSearchParams(e.target.value)}
            value={searchParams}
            type="text"
            placeholder="Airline, destination or flight #"
            className="search__input"
          ></input>
          <Link
            className="search__button"
            to={`/${typeUrl}?date=${dateUrl}${searchParams ? `&search=${searchParams}` : ''}`}
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
});
export default connect(mapState)(Search);
