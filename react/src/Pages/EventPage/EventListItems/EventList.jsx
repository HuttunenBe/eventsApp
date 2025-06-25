import { useState, useEffect } from "react";
import useAxios from "../../../Hooks/UseAxios";
import EditEventForm from "../EditEvent/EditEventForm";
import EventDisplay from "./EventDisplay";
import Loading from "../../../Components/Loading/Loading"
import "./eventListItems.css";

const EventList = ({
  id,
  name,
  date,
  location,
  type,
  description,
  long_description,
  price,
  image,
  eventEmoji,
  eventImage,
  onEventModified,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editedEvent, setEditedEvent] = useState({
    name,
    date,
    location,
    type,
    description,
    long_description,
    price,
  });

  const { put, del } = useAxios();
  const [isFavorite, setIsFavorite] = useState(false);
  const currentDate = new Date().toISOString().split("T", 1)[0];

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      if (favorites[id]) {
        setIsFavorite(true);
      }
    }
  }, [id]);

  const toggleFavorite = () => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites = {};

    if (storedFavorites) {
      favorites = JSON.parse(storedFavorites);
    }

    if (favorites[id]) {
      delete favorites[id];
      setIsFavorite(false);
    } else {
      favorites[id] = true;
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleUpdate = () => {
    setLoading(true);
    put(`api/events/${id}`, editedEvent)
      .then(() => {
          alert("Event updated successfully!"); 
        setIsEditing(false);
        onEventModified();
      })
      .catch((error) => {
        console.error("Failed to update event:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      del(`api/events/${id}`)
        .then(() => {
          alert("Event deleted successfully!"); 
          onEventModified();
        })
        .catch((error) => {
          console.error("Failed to delete event:", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="eventTicket">
          {!isEditing ? (
            <EventDisplay
              name={name}
              date={date}
              location={location}
              type={type}
              description={description}
              price={price}
              image={image}
              eventImage={eventImage}
              eventEmoji={eventEmoji}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              onEdit={() => setIsEditing(true)}
              onDelete={handleDelete}
            />
          ) : (
            <EditEventForm
              editedEvent={editedEvent}
              onHandleInputChange={handleInputChange}
              onSave={handleUpdate}
              onCancel={() => setIsEditing(false)}
              currentDate={currentDate}
            />
          )}
        </div>
      )}
    </>
  );
};

export default EventList;
