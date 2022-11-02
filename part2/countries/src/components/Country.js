import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => setWeather(response.data));
  }, [country]);

console.log(weather)

  return (
    <div>
      <h2>{country.name.common}</h2>

      <div>capital {country.capital[0]} </div>
      <div>area {country.area}</div>

      <div>
        <h3>languages:</h3>
        <ul>
          {
            Object.entries(country.languages)
                .map(([lang, language]) => <li key={lang}>{language}</li>)
          }
        </ul>
      </div>
      <img src={country.flags.png} alt={`${country.name} flag`} />
      {
        weather ? 
        <Weather countryName={country.name.common} weather={weather} /> :
        <div>Loading...</div>
      }
    </div>
  );
};

export default Country;