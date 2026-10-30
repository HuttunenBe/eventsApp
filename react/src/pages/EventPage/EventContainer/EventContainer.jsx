import { useState, useEffect } from "react";
import { useParams } from "react-router";
import CategoryPage from "../CategoryPage/CategoryPage";

import EventCalendar from "../EventCalendar/EventCalendar";
import EventListView from "../EventListView/EventListView";
import eventsData from "./eventsData";
import useAxios from "../../../Hooks/UseAxios";
import faqData from "./faqData";
import "./eventContainer.css";
import Loading from "../../../Components/Loading/Loading";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showAllFaq, setShowAllFaq] = useState(false);

  const { get } = useAxios();
  const { category } = useParams();

  useEffect(() => {
    fetchEvents();
    setShowCalendar(false);
  }, [category]);

  const fetchEvents = () => {
    setLoading(true);
    setError(null);

    const savedEvents = JSON.parse(localStorage.getItem("events") || "[]");

    const deletedEvents = JSON.parse(
      localStorage.getItem("deletedEvents") || "[]",
    );

    const combineEvents = (backendEvents) => {
      const combinedEvents = [...backendEvents, ...savedEvents];

      const uniqueEvents = Array.from(
        new Map(
          combinedEvents.map((event) => [String(event.id), event]),
        ).values(),
      );

      return uniqueEvents.filter(
        (event) => !deletedEvents.includes(String(event.id)),
      );
    };

    get("/api/events")
      .then((response) => {
        const backendEvents = Array.isArray(response.data)
          ? response.data
          : eventsData;

        setEvents(combineEvents(backendEvents));
      })
      .catch(() => {
        setEvents(combineEvents(eventsData));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const faqToShow = showAllFaq ? faqData : faqData.slice(0, 3);

  return (
    <div className="pageWrapper">
      <div className="eventContainer">
        <section className="eventHeroSection">
          <h1>🎟️ Find Your Next Finnish Adventure</h1>
          <p>
            Use our calendar or scroll through the event list to explore events
            in Finland — from music gigs to food markets and festivals.
          </p>
        </section>

        <button
          onClick={() => setShowCalendar((prev) => !prev)}
          className="toggleViewButton"
        >
          {showCalendar ? "Switch to List View" : "Switch to Calendar View"}
        </button>

        {error && <p className="errorMessage">{error}</p>}

        {loading ? (
          <Loading />
        ) : (
          <>
            {category ? (
              <CategoryPage events={events} onEventModified={fetchEvents} />
            ) : showCalendar ? (
              <EventCalendar events={events} />
            ) : (
              <EventListView
                events={events}
                onEventModified={fetchEvents}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            )}
          </>
        )}

        <section className="benefitsSection">
          <h2>Why Use EventFinder?</h2>
          <div className="benefitsGrid">
            <div className="benefitCard">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Discover Local Events"
              />
              <h4>Discover Local Events</h4>
              <p>Find hidden gems and popular gatherings near you.</p>
            </div>
            <div className="benefitCard">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Connect & Engage"
              />
              <h4>Connect & Engage</h4>
              <p>Meet new people and share experiences.</p>
            </div>
            <div className="benefitCard">
              <img
                src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
                alt="Support Local"
              />
              <h4>Support Local</h4>
              <p>Contribute to vibrant communities and creators.</p>
            </div>
            <div className="benefitCard">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Stay Updated"
              />
              <h4>Stay Updated</h4>
              <p>Never miss out on exciting year-round events.</p>
            </div>
          </div>
        </section>

        <section className="faqSection">
          <h2>Frequently Asked Questions</h2>
          {faqToShow.map(({ question, answer }, index) => (
            <div key={index} className="faqItem">
              <h4>{question}</h4>
              <p>{answer}</p>
            </div>
          ))}
          {faqData.length > 3 && (
            <button
              className="toggleFaqButton"
              onClick={() => setShowAllFaq((prev) => !prev)}
            >
              {showAllFaq ? "See Less" : "See More"}
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default EventContainer;
