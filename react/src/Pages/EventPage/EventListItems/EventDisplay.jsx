import { useState } from "react";
import "./eventListItems.css";

const EventDisplay = ({
  name,
  date,
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
      <img src={eventImage} className="editImage" alt="Event type icon" />

      <div>
        <div className="weatherModalIcon">
          <p onClick={() => setIsModalOpen(!isModalOpen)}>☀️ 🌧️</p>
          {isModalOpen && (
            <div className="weatherModalWindow">
              <p>All events need to have different weather</p>
              <button onClick={() => setIsModalOpen(false)}>
                <span className="material-icons">close</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <button className="favoriteButton" onClick={toggleFavorite}>
        {isFavorite ? "❤️" : "🤍"}{" "}
      </button>
      <p>
        Type: {type} <span className="eventEmoji">{eventEmoji}</span>
      </p>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Location: {location}</p>

      <p>Description: {description}</p>
      <p>Price: €{price}</p>
      <button className="editButton " onClick={onEdit}>
        Edit
      </button>
      <button className="deleteButton" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

export default EventDisplay;
