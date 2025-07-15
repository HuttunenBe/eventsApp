import { useState, useEffect } from "react";

function WeatherModal({ location, onClose, showCloseButton = true }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!location) return;

    fetch(
      "https://api.weatherapi.com/v1/current.json?key=" +
        import.meta.env.VITE_WEATHER_API_KEY +
        "&q=" +
        encodeURIComponent(location) +
        "&aqi=no"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temp: data.current.temp_c,
          description: data.current.condition.text,
        });
      })
      .catch(() => {
        setWeather(null);
      });
  }, [location]);

  return (
    <div className="weatherModal" onClick={onClose}>
      <div className="weatherModalContent" onClick={(e) => e.stopPropagation()}>
        {weather ? (
          <p>
            Weather in {location}: {weather.temp}°C, {weather.description}
          </p>
        ) : (
          <p>Loading</p>
        )}

        {showCloseButton && <button onClick={onClose}>Close</button>}
      </div>
    </div>
  );
}

export default WeatherModal;
