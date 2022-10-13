import React from 'react';
import './common.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FlightsBoard from './components/flightsBoard/FlightsBoard';
import Header from './components/header/Header';
import Search from './components/search/Search';

const App = () => (
  <div className="main">
    <Header />
    <div className="container">
      <Search />
      <BrowserRouter>
        <Switch>
          <Route path="/depatures">
            <FlightsBoard zIndexD={'2'} zIndexA={'1'} />
          </Route>
          <Route path="/arrivals">
            <FlightsBoard zIndexD={'1'} zIndexA={'2'} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);
export default App;
