import { useState } from "react";
import { useNavigate, Link } from "react-router";
import useAxios from "../../Hooks/UseAxios";
import "./addEvent.css";

const AddEvent = ({ onEventAdded }) => {
  const { post } = useAxios();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    type: "",
    description: "",
    long_description: "",
    price: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Event title is required.";
    if (!formData.date) newErrors.date = "Event date is required.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.type) newErrors.type = "Please select a category.";
    if (
      formData.price === "" ||
      formData.price === null ||
      formData.price === undefined
    ) {
      newErrors.price = "Ticket price is required.";
    } else if (Number(formData.price) < 0) {
      newErrors.price = "Price cannot be negative.";
    }
    if (!formData.description.trim())
      newErrors.description = "Short description is required.";
    if (!formData.long_description.trim())
      newErrors.long_description = "Detailed description is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const eventToSend = {
      ...formData,
      price: formData.price ? Number(formData.price) : 0,
      image:
        formData.image.trim() ||
        "https://via.placeholder.com/600x400.png?text=Default+Event+Image",
      long_description: formData.long_description.trim(),
    };

    post("api/events", eventToSend)
      .then((res) => {
        onEventAdded?.(res.data);
        navigate("/events");
        setFormData({
          name: "",
          date: "",
          location: "",
          type: "",
          description: "",
          long_description: "",
          price: "",
          image: "",
        });
        setErrors({});
      })
      .catch((error) => {
        console.error("Failed to add event:", error);
        alert("Oops! Something went wrong.");
      });
  };
  return (
    <>
      <div className="addEventBody">
        <div className="addEventGreeting">
          <h1>Submit Your Event</h1>
          <p>
            Use the form below to share your event with our community. Once
            submitted, our team will review the details and notify you once it's
            approved.
          </p>
        </div>

        <div className="addEventFormContainer">
          <h2>Add a New Event</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input
              name="name"
              placeholder="Event Title"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <p className="error">{errors.date}</p>}

            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <p className="error">{errors.location}</p>}

            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Outdoor & Nature">Outdoor & Nature</option>
              <option value="Food & Social">Food & Social</option>
              <option value="Hobbies & DIY">Hobbies & DIY</option>
              <option value="Learning & Networking">
                Learning & Networking
              </option>
              <option value="Health & Wellness">Health & Wellness</option>
              <option value="Music & Entertainment">
                Music & Entertainment
              </option>
              <option value="Markets & Swaps">Markets & Swaps</option>
              <option value="Family & Kids">Family & Kids</option>
              <option value="Sports & Games">Sports & Games</option>
              <option value="Parties & Celebration">
                Parties & Celebration
              </option>
            </select>
            {errors.type && <p className="error">{errors.type}</p>}

            <textarea
              name="description"
              placeholder="Short Description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}

            <textarea
              name="long_description"
              placeholder="Detailed Description"
              value={formData.long_description}
              onChange={handleChange}
            />
            {errors.long_description && (
              <p className="error">{errors.long_description}</p>
            )}

            <input
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              type="url"
            />

            <input
              name="price"
              placeholder="Ticket Price"
              type="number"
              min="0"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="error">{errors.price}</p>}

            <button type="submit">Add Event</button>
          </form>
        </div>
        <p className="addEventContact">
          Need help? Don't hesitate to contact us.{" "}
          <Link to="/contact">Contact Page</Link>
        </p>
      </div>
    </>
  );
};

export default AddEvent;
