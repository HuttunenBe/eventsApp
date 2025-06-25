import "./frontPage.css";
import { useNavigate } from "react-router";
import popularEvents from "./popularEventsData";
import { useRef } from "react";
import CountDown from "./CountDown";

const FrontPage = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const convertToDate = (dateStr) => {
    const currentYear = new Date().getFullYear();
    return new Date(`${dateStr} ${currentYear} 00:00:00`).toISOString();
  };

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    if (slider) {
      const card = slider.querySelector(".popularEventCard");
      if (card) {
        const cardWidth = card.offsetWidth;
        slider.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="frontpageContainer">
      <header className="frontpageHeroSection">
        <h1>Welcome to Highlight Events</h1>
        <p>
          Highlight Events is your go-to hub for discovering, sharing, and
          organizing events that bring people together across Finland. From
          casual meetups to grand experiences — we shine a light on it all.
        </p>
        <div className="frontpageButtons">
          <button className="exploreButton" onClick={() => navigate("/Events")}>
            Explore Events
          </button>
          <button
            className="learnMoreButton"
            onClick={() => navigate("/about")}
          >
            Learn More <span className="arrow">➜</span>
          </button>
        </div>
      </header>

      <section className="popularEventsSection">
        <h2>Most Popular Events</h2>
        <div className="sliderWrapper">
          <button className="arrowButton" onClick={() => scrollSlider(-1)}>
            ‹
          </button>
          <div
            className="popularEventsSlider"
            id="popularSlider"
            ref={sliderRef}
          >
            {popularEvents.map((event) => (
              <div
                key={event.id}
                className="popularEventCard"
                onClick={() => navigate(`/events/${event.id}`)}
              >
                <img src={event.img} alt={event.title} />
                <h4>{event.title}</h4>
                <p>{event.date}</p>
                <CountDown targetDate={convertToDate(event.date)} />
              </div>
            ))}
          </div>
          <button className="arrowButton" onClick={() => scrollSlider(1)}>
            ›
          </button>
        </div>
      </section>

      <section className="whyUsSection">
        <div className="whyUsWrapper">
          <img
            src="https://images.pexels.com/photos/3758119/pexels-photo-3758119.jpeg"
            alt="People collaborating at event"
            className="whyUsImage"
          />
          <div className="whyUsBackground">
            <h2>Why Use Highlight Events?</h2>
            <p>
              Whether you're an organizer, artist, or enthusiast — Highlight
              Events gives you the tools to bring your vision to life and
              connect with your local community.
            </p>

            <ul className="featuresList">
              <li>✓ Quick and easy event creation</li>
              <li>✓ Email reminders and calendar sync built-in</li>
              <li>✓ Browse by category, date, or location</li>
              <li>✓ Simple ticketing and registration</li>
              <li>✓ Perfect for online, in-person, or hybrid events</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cardsSection">
        <h2>What Can You Do With Highlight?</h2>
        <div className="cardsGrid">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg"
              alt="Create event"
              className="cardImage"
            />
            <h4>Create</h4>
            <p>
              Build engaging events with flexible settings and personalized
              details.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/2330507/pexels-photo-2330507.jpeg"
              alt="Explore events"
              className="cardImage"
            />
            <h4>Explore</h4>
            <p>
              Find events that match your passions—from festivals to workshops.
            </p>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/5896668/pexels-photo-5896668.jpeg"
              alt="Engage with audience"
              className="cardImage"
            />
            <h4>Engage</h4>
            <p>
              Connect with your audience, gather feedback, and grow your reach.
            </p>
          </div>
        </div>
      </section>

      <section className="hostEventSection">
        <h3>Host Your Next Event</h3>
        <p>
          Ready to make something amazing happen? Highlight Events supports you
          every step of the way. Reach out for help, collaborations, or just to
          say hi.
        </p>
        <button
          className="addEventButton"
          onClick={() => navigate("/AddEvent")}
        >
          Create an Event
        </button>
      </section>
    </div>
  );
};

export default FrontPage;
