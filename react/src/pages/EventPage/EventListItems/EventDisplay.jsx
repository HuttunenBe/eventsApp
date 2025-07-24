import { useState } from "react";
import WeatherModal from "../../../Components/Events/Map&Weather/WeatherModal";
import MapModal from "../../../Components/Events/Map&Weather/MapModal";

const EventDisplay = ({
  name,
  location,
  type,
  description,
  price,
  image,
  eventEmoji,
  eventImage,
  isFavorite,
  toggleFavorite,
  onEdit,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <img src={image} className="eventPageImage" />

      <div>
        <div className="weatherModalIcon">
          <p onClick={() => setIsModalOpen(true)} title="Show weather">
            ☀️ 🌧️
          </p>
          {isModalOpen && (
            <WeatherModal
              location={location}
              onClose={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>

      <button className="favoriteButton" onClick={toggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}{" "}
      </button>
      <p>
        <strong>Type: </strong>{type} <span className="eventEmoji">{eventEmoji}</span>
      </p>
      <p><strong>Name: </strong>{name}</p>
      <p>
       <strong> Location: </strong><MapModal location={location} />
      </p>

      <p><strong>Description: </strong>{description}</p>
      <p><strong>Price: </strong> {price} €</p>
      <button className="editButton" onClick={onEdit}>
        Edit
      </button>
      <button className="deleteButton" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default EventDisplay;
