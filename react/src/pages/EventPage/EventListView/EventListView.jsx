import { useState } from "react";
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
  const [visibleEvents, setVisibleEvents] = useState(6);

  const search = (searchValue || "").toLowerCase();
  const safeEvents = Array.isArray(events) ? events : [];

  const filteredEvents = safeEvents.filter((e) => {
    const matchType = type ? e.type === type : true;

    const matchSearch =
      e.name.toLowerCase().startsWith(search) ||
      e.location.toLowerCase().startsWith(search);

    return matchType && matchSearch;
  });

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

      <div className="eventGrid">
        {filteredEvents.slice(0, visibleEvents).map((event) => {
          const eventEmoji = GetEventEmoji(event.type);

          return (
            <div key={event.id} className="eventGridCard">
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

      {visibleEvents < filteredEvents.length && (
        <button
          className="seeMoreButton"
          onClick={() => setVisibleEvents((prev) => prev + 9)}
        >
          See More Events
        </button>
      )}
    </>
  );
};

export default EventListView;
