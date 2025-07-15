import { NavLink } from "react-router-dom";
import "./footer.css";
import Newsletter from "./NewsLetter";

function Footer() {
  return (
    <footer>
      <nav>
        <ul className="footerLinks">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/addEvent">Add Event</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/userAuthentication">Log in</NavLink>
          </li>
        </ul>
      </nav>

      <section className="contactInfoSection">
        <h2>Office Information & Contacts</h2>
        <p className="contactIntro">
          We're here to help you. Reach out to us through any of the following:
        </p>
        <div className="contactInfoWrapper">
          <div className="contactCard">
            <h4>📍 Address</h4>
            <p>
              123 Event Street
              <br />
              Cityville, CV 45678
            </p>
          </div>
          <div className="contactCard">
            <h4>📞 Phone</h4>
            <p>+044 567 890</p>
          </div>
          <div className="contactCard">
            <h4>✉️ Email</h4>
            <p>
              <a href="mailto:info@highlightevents.com">
                info@highlightevents.com
              </a>
            </p>
          </div>
          <div className="contactCard">
            <h4>⏰ Office Hours</h4>
            <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
          </div>
        </div>
        <Newsletter />
      </section>
    </footer>
  );
}

export default Footer;
