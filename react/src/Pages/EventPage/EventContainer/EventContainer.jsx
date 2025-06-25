import { useState, useEffect } from "react";
import EventListView from "../EventListView/EventListView";
import { DotLoader } from "react-spinners";
import EventCalendar from "../../../Components/Events/EventCalendar/EventCalendar";
import useAxios from "../../../Hooks/UseAxios";
import faqData from "./faqData";
import "./eventContainer.css";
import EventCategoryButtons from "../EventCategoryButtons";

const EventContainer = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showAllFaq, setShowAllFaq] = useState(false);



  const { get } = useAxios();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setLoading(true);
    setError(null);
    get("api/events")
      .then((response) => {
        setEvents(response.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch events. Please try again later.");
        setLoading(false);
      });
  };

  const searchHandle = (e) => setSearchValue(e.target.value);

  const filteredEvents = events.filter((event) => {
    const search = searchValue.toLowerCase();
    return (
      event.name.toLowerCase().includes(search) ||
      event.location.toLowerCase().includes(search)
    );
  });

  const lowToHigh = () => {
    const sorted = [...events].sort((a, b) => a.price - b.price);
    setEvents(sorted);
  };
  const highToLow = () => {
    const sorted = [...events].sort((a, b) => b.price - a.price);
    setEvents(sorted);
  };
  const sortAtoZ = () => {
    const sorted = [...events].sort((a, b) => a.name.localeCompare(b.name));
    setEvents(sorted);
  };
  const sortZtoA = () => {
    const sorted = [...events].sort((a, b) => b.name.localeCompare(a.name));
    setEvents(sorted);
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
       
        <div className="controlsWrapper">
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchValue}
            onChange={searchHandle}
            className="searchInput"
          />

          <select
            onChange={(e) => {
              const value = e.target.value;
              if (value === "low") lowToHigh();
              else if (value === "high") highToLow();
              else if (value === "az") sortAtoZ();
              else if (value === "za") sortZtoA();
            }}
            defaultValue=""
            className="sortSelect"
          >
            <option value="" disabled>
              Sort Events
            </option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="az">Name: A–Z</option>
            <option value="za">Name: Z–A</option>
          </select>

          <button
            onClick={() => setShowCalendar((prev) => !prev)}
            className="toggleViewButton"
          >
            {showCalendar ? "Switch to List View" : "Switch to Calendar View"}
          </button>
        </div>

        {error}

        {loading ? (
          <DotLoader size={60} color="#8338ec" />
        ) : (
          <>
            {showCalendar ? (
              <EventCalendar events={filteredEvents} />
            ) : (
              <EventListView
                events={filteredEvents}
                onEventModified={fetchEvents}
              />
            )}
          </>
        )}

        <section className="benefitsSection">
  <h2>Why Use EventFinder?</h2>
  <div className="benefitsGrid">
    <div className="benefitCard">
      <img
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&dpr=1"
    
      />
      <h4>Discover Local Events</h4>
      <p>Find hidden gems and popular gatherings near you.</p>
    </div>
    <div className="benefitCard">
      <img
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&dpr=1"
     
      />
      <h4>Connect & Engage</h4>
      <p>Meet new people and share experiences.</p>
    </div>
    <div className="benefitCard">
      <img
        src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&dpr=1"
     
      />
      <h4>Support Local</h4>
      <p>Contribute to vibrant communities and creators.</p>
    </div>
    <div className="benefitCard">
      <img
        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&dpr=1"
      
      
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
