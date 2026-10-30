import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../Hooks/UseAxios";
import EventDetailsContent from "./EventDetailsContent";
import "./eventDetails.css";
import Loading from "../../Components/Loading/Loading";
import eventsData from "../EventPage/EventContainer/eventsData";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { get } = useAxios();

  useEffect(() => {
    let isMounted = true;

    const fetchEvent = async () => {
      setLoading(true);
      setEvent(null);

      try {
        const response = await get(`/api/events/${id}`);

        if (isMounted) {
          setEvent(response.data);
        }
      } catch {
        const localEvent = eventsData.find(
          (item) => String(item.id) === String(id),
        );

        if (isMounted) {
          setEvent(localEvent || null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEvent();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!event) {
    return (
      <div>
        <p>Event not found.</p>
        <button onClick={() => navigate("/Events")}>Back to Events</button>
      </div>
    );
  }

  return <EventDetailsContent event={event} navigate={navigate} />;
};

export default EventDetails;
