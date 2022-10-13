import React from 'react';
import './search.scss';

const Search = () => (
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
        <button type="submit" className="search__button">
          Search
        </button>
      </form>
    </div>
  </div>
);
export default Search;
