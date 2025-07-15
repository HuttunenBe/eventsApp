import { useState, useRef } from "react";
import { Link } from "react-router";
import EventList from "../EventListItems/EventList";
import GetEventEmoji from "../../../Components/Events/EventEmoji/EventEmoji";
import EventCategoryButtons from "../../../Components/Events/EventCategoryButtons";
import "./eventList.css";

const EventListView = ({
  events = [],
  onEventModified,
  searchValue,
  setSearchValue,
}) => {
  const [type, setType] = useState(null);
  const sliderRef = useRef(null);

  const search = searchValue.toLowerCase();

  const filteredEvents = events.filter((e) => {
    const matchType = type ? e.type === type : true;

    const matchSearch =
      e.name.toLowerCase().startsWith(search) ||
      e.location.toLowerCase().startsWith(search);

    return matchType && matchSearch;
  });

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      const card = slider.querySelector(".eventCard");
      if (card) {
        const cardWidth = card.offsetWidth;
        slider.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <EventCategoryButtons setType={setType} />

      <input
        type="text"
        placeholder="Search by name or location..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="searchInput"
      />

      <div className="eventListContainer">
        <button className="arrowButton left" onClick={() => scrollSlider(-1)}>
          ‹
        </button>

        <div className="eventSlider" ref={sliderRef}>
          {filteredEvents.map((event) => {
            const eventEmoji = GetEventEmoji(event.type);

            return (
              <div key={event.id} className="eventCard">
                <EventList
                  {...event}
                  darkMode={true}
                  eventEmoji={eventEmoji}
                  onEventModified={onEventModified}
                />
                <Link className="secondary" to={`/events/${event.id}`}>
                  Read more!
                </Link>
              </div>
            );
          })}
        </div>

        <button className="arrowButton right" onClick={() => scrollSlider(1)}>
          ›
        </button>
      </div>
    </>
  );
};

export default EventListView;
