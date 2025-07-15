import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./eventCalendar.css";

export function EventCalendar({ events }) {
  const [modal, setModal] = useState(null);

  const calendarEvents = events.map(
    ({ name, date, description, type, long_description, price, location }) => ({
      title: name,
      date,
      extendedProps: { description, type, long_description, price, location },
    })
  );

  return (
    <div className="calendarWrapper">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={calendarEvents}
        height="auto"
        eventContent={({ timeText, event }) => (
          <>
            <b>{timeText}</b> <i>{event.title}</i>
          </>
        )}
        eventClick={({ event }) => {
          setModal({
            title: event?.title,
            date: event?.startStr,
            description: event?.extendedProps.description,
            type: event?.extendedProps.type,
            long_description: event?.extendedProps.long_description,
            price: event?.extendedProps.price,
            location: event?.extendedProps.location,
          });
        }}
      />

      {modal && (
        <>
          <div className="modalBackdrop"></div>
          <div className="calendarModal">
            <h3>{modal.title}</h3>
            <p>Description: {modal.description}</p>
            <p>Date: {modal.date}</p>
            <p>Type: {modal.type}</p>
            <p>Details: {modal.long_description}</p>
            <p>Price: {modal.price}</p>
            <p>Location: {modal.location}</p>
            <button onClick={() => setModal(null)}>Close</button>
          </div>
        </>
      )}
    </div>
  );
}

export default EventCalendar;
