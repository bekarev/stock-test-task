import React from 'react';
import SearchBar from './Search';


const WeatherDisplay: React.FC = () => {

  return (
    <>
    <h2>Weather Search</h2>
    <SearchBar />
    <p>No data available</p>
    </>
  );
};

export default WeatherDisplay;