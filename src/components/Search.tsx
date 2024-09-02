import React, { useState } from 'react';


const SearchBar: React.FC = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button 
      onClick={handleSearch}
      >Search</button>
    </div>
  );
};

export default SearchBar;
