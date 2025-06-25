import "./eventDetails.css";

const EventDetailsContent = ({ event }) => {
  return (
    <div className="eventDetailContainer">
      <div className="eventDetailHeader">
        <div className="eventDetailSection">
          <img
            src={
              event.image ||
              "https://images.pexels.com/photos/2311602/pexels-photo-2311602.jpeg?auto=compress&cs=tinysrgb&h=750&dpr=2"
            }
            alt={event.name}
            className="eventImage"
          />
          <h2 className="eventName">{event.name}</h2>
          <p className="eventEmoji">{event.eventEmoji || "🎉"}</p>
        </div>

        <div className="eventInfo">
          <p>{event.description}</p>
          <p>
            <strong>Date: {event.date}</strong>
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Price:</strong> €{event.price}
          </p>
        </div>

        <div className="eventDescription">
          <h3>About the Event</h3>
          <p>{event.long_description}</p>
        </div>
      </div>

      <button onClick={() => navigate(-1)} className="goBackButton">
        Go Back
      </button>

      <div className="eventReviews">
        <h4>Join our happy customers!</h4>
        <ul>
          <li>
            <img
              src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Vibes"
              className="happyCustomers"
            />
            "An unforgettable experience with amazing vibes and fantastic
            entertainment!"
          </li>

          <li>
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Vibes"
              className="happyCustomers"
            />
            "Every event leaves me wanting more — truly a community
            celebration."
          </li>
          <li>
            <img
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Vibes"
              className="happyCustomers"
            />
            "Fun for all ages with something exciting around every corner!"
          </li>
        </ul>
      </div>

      <div className="eventSafetyFaqContainer">
        <div className="eventSafety">
          <h3>Health & Safety</h3>

          <p>
            Your safety is our top priority. We diligently ensure that every
            event adheres to strict health and safety protocols, including
            thorough venue maintenance and regular safety inspections.
            <br />
            <br />
            Clear emergency procedures are established and communicated to all
            attendees and staff to guarantee a quick and efficient response if
            needed. Our facilities are fully accessible to accommodate all
            guests, including those with mobility challenges or special needs.
            <br />
            <br />
            Additionally, we collaborate closely with local health authorities
            to stay updated on any new guidelines, making sure every aspect of
            your experience is comfortable, secure, and enjoyable from start to
            finish. Your well-being is at the heart of everything we do.
          </p>
        </div>

        <div className="eventFAQ">
          <h3>Frequently Asked Questions</h3>

          <p>
            <strong>Q: Can I buy tickets through the app?</strong>
            <br />
            A: Not at the moment. Ticket purchases are done on the event’s own
            website or platform.
          </p>

          <p>
            <strong>Q: Are pets allowed?</strong>
            <br />
            A: It depends on the event. Always check with the organizer
            beforehand. Only service animals are allowed for safety reasons.
          </p>

          <p>
            <strong>Q: Can I bring my own food and drinks?</strong>
            <br />
            A: Some events allow it, but be sure to confirm with the event
            organizers first.
          </p>

          <p>
            <strong>Q: Are events wheelchair accessible?</strong>
            <br />
            A: Many venues are wheelchair accessible, but it’s best to confirm
            with the organizer before attending.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsContent;
