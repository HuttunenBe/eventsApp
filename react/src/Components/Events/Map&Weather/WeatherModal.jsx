
import { useState, useEffect } from "react";

function WeatherModal({
  location,
  onClose,
  showCloseButton = true,
  iconOnly = false,
}) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!location) return;

    fetch(
      `${import.meta.env.VITE_NEWSLETTER_API_URL}/api/weather?location=${encodeURIComponent(location)}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }

        return response.json();
      })
      .then((data) => {
        setWeather({
          temp: data.current.temp_c,
          description: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      })
      .catch(() => {
        setWeather(null);
      });
  }, [location]);

  return (
    <>
      {iconOnly ? (
        weather ? (
          <img
            src={`https:${weather.icon}`}
            alt={weather.description}
            title={`${weather.temp}°C, ${weather.description}`}
            className="weatherIcon"
          />
        ) : (
          <span>Loading</span>
        )
      ) : (
        <div className="weatherModal" onClick={onClose}>
          <div
            className="weatherModalContent"
            onClick={(e) => e.stopPropagation()}
          >
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
      )}
    </>
  );
}

export default WeatherModal;
