import { useState } from "react";
import "./contactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mrbkdnag", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contactBody">
      <div className="contactPageContainer">
        <h1>Contact Us</h1>
        <p>
          Have questions, ideas, or want to collaborate? Reach out to us using
          the form below or through our contact information.
        </p>

        <div className="contactContent">
          <form className="contactForm" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              aria-required="true"
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              aria-required="true"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows={5}
              aria-required="true"
            />

            <button type="submit" aria-label="Send Message">
              Send Message
            </button>

            {submitted && (
              <p className="successMessage">
                Thank you! Your message has been sent.
              </p>
            )}
          </form>

          <aside className="contactInfo" aria-label="Contact Information">
            <h2>Our Office</h2>
            <p>
              📍 123 Event Street
              <br />
              Cityville, CV 45678
            </p>
            <p>
              📞 Phone: +044 567 890
              <br />
              ✉️ Email:{" "}
              <a href="mailto:info@highlightevents.com">
                info@highlightevents.com
              </a>
            </p>
            <p>⏰ Office Hours: Mon–Fri, 9:00 AM – 5:00 PM</p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
