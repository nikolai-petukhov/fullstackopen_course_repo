const Weather = ({ countryName, weather }) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
      <div>
        <h2>Weather in {countryName}</h2>
        <p>temperature {weather.main.temp} Celcius</p>
        <img src={weatherIcon} alt={weather.weather[0].description} />
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
};

export default Weather;