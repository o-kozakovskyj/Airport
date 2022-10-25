import React from 'react';
import './common.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import store from './store';
import './flights/components/flightsBoard/flightsBoard.scss';
import FlightsBoard from './flights/components/flightsBoard/FlightsBoard';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="main">
        <Header />
        <div className="container">
          <FlightsBoard />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
