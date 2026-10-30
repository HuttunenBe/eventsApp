import { useState } from "react";
import { useParams, Link } from "react-router";
import EventList from "../EventListItems/EventList";
import GetEventEmoji from "../../../Components/Events/EventEmoji/EventEmoji";
import "./categoryPage.css";

const CategoryPage = ({ events = [], onEventModified }) => {
  const { category } = useParams();
  const [visibleEvents, setVisibleEvents] = useState(6);

  const filteredEvents = events.filter(
    (event) => event.type?.toLowerCase() === category?.toLowerCase(),
  );

  return (
    <div className="categoryPage">
      <h2>{category} Events</h2>

      <Link to="/events">← Back to all events</Link>

      {filteredEvents.length === 0 ? (
        <p>No events found in this category.</p>
      ) : (
        <>
          <div className="eventGrid">
            {filteredEvents.slice(0, visibleEvents).map((event) => (
              <div key={event.id} className="eventGridCard">
                <EventList
                  {...event}
                  darkMode={true}
                  eventEmoji={GetEventEmoji(event.type)}
                  onEventModified={onEventModified}
                />

                <Link className="secondary" to={`/events/${event.id}`}>
                  Read more!
                </Link>
              </div>
            ))}
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
      )}
    </div>
  );
};

export default CategoryPage;
