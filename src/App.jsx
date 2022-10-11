import React from 'react';
import FlightsBoard from './components/FlightsBoard';
import Header from './components/header/Header';
import Search from './components/Search';

function App() {
  return (
    <>
      <Header />
      <Search />
      <FlightsBoard />
    </>
  );
}
export default App;
