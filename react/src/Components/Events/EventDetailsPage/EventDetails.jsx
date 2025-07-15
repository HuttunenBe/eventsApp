import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../../Hooks/UseAxios";
import EventDetailsContent from "./EventDetailsContent";
import "./eventDetails.css";
import Loading from "../../Loading/Loading";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { get } = useAxios();

  useEffect(() => {
    setLoading(true);
    get(`api/events/${id}`)
      .then((res) => {
        setEvent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching event:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading />;
  if (!event) return <p>Event not found</p>; //do i need these

  return (
    <>
      <EventDetailsContent event={event} navigate={navigate} />
    </>
  );
};

export default EventDetails;
