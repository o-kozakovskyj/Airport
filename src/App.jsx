import React from 'react';
import './common.scss';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import store from './store';
import './components/flightsBoard/flightsBoard.scss';
import FlightsBoard from './components/flightsBoard/FlightsBoard';

const App = () => (
  <Provider store={store}>
    <div className="main">
      <Header />
      <div className="container">
        <FlightsBoard />
      </div>
    </div>
  </Provider>
);

export default App;
