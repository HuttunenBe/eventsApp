import { useState, useEffect } from "react";
import useAxios from "../../../Hooks/UseAxios";
import EditEventForm from "../EditEvent/EditEventForm";
import EventDisplay from "./EventDisplay";
import Loading from "../../../Components/Loading/Loading";
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

    const updatedEvent = {
      ...editedEvent,
      id,
      image,
      price: Number(editedEvent.price),
    };

    put(`api/events/${id}`, updatedEvent)
      .then(() => {
        const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");

        const updatedSavedEvents = savedEvents.filter(
          (event) => String(event.id) !== String(id),
        );

        localStorage.setItem("events", JSON.stringify(updatedSavedEvents));

        alert("Event updated successfully!");
        setIsEditing(false);
        onEventModified?.();
      })
      .catch((error) => {
        console.error("Saving event locally:", error);

        const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");

        const existingIndex = savedEvents.findIndex(
          (event) => String(event.id) === String(id),
        );

        if (existingIndex !== -1) {
          savedEvents[existingIndex] = updatedEvent;
        } else {
          savedEvents.push(updatedEvent);
        }

        localStorage.setItem("events", JSON.stringify(savedEvents));

        alert("Event updated locally!");
        setIsEditing(false);
        onEventModified?.();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      del(`api/events/${id}`)
        .then(() => {
          const savedEvents = JSON.parse(
            localStorage.getItem("events") || "[]",
          );

          const updatedEvents = savedEvents.filter(
            (event) => String(event.id) !== String(id),
          );

          localStorage.setItem("events", JSON.stringify(updatedEvents));

          const deletedEvents = JSON.parse(
            localStorage.getItem("deletedEvents") || "[]",
          );

          localStorage.setItem(
            "deletedEvents",
            JSON.stringify(
              deletedEvents.filter((eventId) => String(eventId) !== String(id)),
            ),
          );

          alert("Event deleted successfully!");
          onEventModified?.();
        })
        .catch((error) => {
          console.error("Deleting event locally:", error);

          const deletedEvents = JSON.parse(
            localStorage.getItem("deletedEvents") || "[]",
          );

          if (!deletedEvents.includes(String(id))) {
            deletedEvents.push(String(id));
          }

          localStorage.setItem("deletedEvents", JSON.stringify(deletedEvents));

          const savedEvents = JSON.parse(
            localStorage.getItem("events") || "[]",
          );

          localStorage.setItem(
            "events",
            JSON.stringify(
              savedEvents.filter((event) => String(event.id) !== String(id)),
            ),
          );

          alert("Event deleted locally!");
          onEventModified?.();
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
