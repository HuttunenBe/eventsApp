import { useState, useRef } from "react";
import { Link } from "react-router";
import EventList from "../EventListItems/EventList";
import GetEventEmoji from "../../../Components/Events/EventEmojisAndImages/EventEmoji";
import GetEventImage from "../../../Components/Events/EventEmojisAndImages/EventImages";
import EventCategoryButtons from "../EventCategoryButtons";


import "./eventList.css";

const EventListView = ({ events = [], onEventModified }) => {
  const [type, setType] = useState(null);
  const sliderRef = useRef(null);


  const filteredEvents = type ? events.filter(e => e.type === type) : events;

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

      <div className="eventListContainer">
        <button className="arrowButton left" onClick={() => scrollSlider(-1)}>
          ‹
        </button>

        <div className="eventSlider" ref={sliderRef}>
          {filteredEvents.map(event => {
            const eventEmoji = GetEventEmoji(event.type);
            const eventImage = GetEventImage(event.type);

            return (
              <div key={event.id} className="eventCard">
                <EventList
                  {...event}
                  darkMode={true}
                  eventEmoji={eventEmoji}
                  eventImage={eventImage}
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
