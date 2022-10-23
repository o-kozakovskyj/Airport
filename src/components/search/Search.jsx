import React from 'react';
import './search.scss';
import { Link } from 'react-router-dom';

const Search = () => {
  const value = null;
  return (
    <div className="search">
      <h2 className="search__title">Search flight</h2>
      <div className="search__container">
        <i className="fas fa-search search__icon"></i>
        <form className="search__form">
          <input
            type="text"
            placeholder="Airline, destination or flight #"
            className="search__input"
          ></input>
          <Link className="search__button" to={`/departures${value ? `?search=${value}` : ''}`}>
            Search
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Search;
