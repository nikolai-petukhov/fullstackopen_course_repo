import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import FilterResult from "./components/FilterResult";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState('');

  const countriesToShow = searchString
    ? countries.filter(country => country.name.common.toLowerCase().includes(searchString))
    : [];

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data));
  }, []);
  
  const searchInputHandler = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };


  return (
    <div>
      <Filter filterInputHandler={searchInputHandler}/>
      <FilterResult countries={countriesToShow}/>
    </div>
  );
};

export default App;
