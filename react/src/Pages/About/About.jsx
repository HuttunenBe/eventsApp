import ContactPage from "../Contact/ContactPage";
import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <section className="heroSection">
        <div className="heroContent">
          <h1>Craft Unforgettable Moments</h1>
          <p className="heroParagraph">
            Your premier platform for seamless event creation, discovery, and
            community building. From intimate gatherings to grand celebrations,
            we're here to make every moment count.
          </p>
          <a href="/AddEvent" className="createButton">
            Create Your Event Now
          </a>
        </div>
      </section>

      <section className="missionSection" id="missionVision">
        <div className="missionContent">
          <h2>Our Mission </h2>
          <p>
            At <strong>Highlight Events</strong>, we believe shared experiences
            are the foundation of vibrant communities. Our mission is to empower
            individuals and organizations to create, manage, and promote
            meaningful events effortlessly. Founded from a passion for
            connection, our journey is driven by innovation and your feedback.
            Every feature is designed to help you craft moments that resonate
            and inspire.
          </p>
        </div>
        <div className="visionImage">
          <img
            src="https://images.pexels.com/photos/1035677/pexels-photo-1035677.jpeg"
            alt="People collaborating and connecting"
          />
        </div>
      </section>

      <section className="storySection" id="storyVision">
        <div className="storyImage">
          <img
            src="https://images.pexels.com/photos/2124886/pexels-photo-2124886.jpeg"
            alt="People collaborating and connecting"
          />
        </div>
        <div className="storyContent">
          <h2>Our Story</h2>
          <p>
            At <strong>Highlight Events</strong>, we believe shared experiences
            are the foundation of vibrant communities. Our mission is to empower
            individuals and organizations to create, manage, and promote
            meaningful events effortlessly. Founded from a passion for
            connection, our journey is driven by innovation and your feedback.
            Every feature is designed to help you craft moments that resonate
            and inspire.
          </p>
        </div>
      </section>

      <section className="featuresSection">
        <h2>Empowering Every Event</h2>
        <div className="featuresGrid">
          <div className="featureCard">
            <h3>Intuitive Event Creation</h3>
            <p>
              Design and launch stunning events in minutes with our
              user-friendly tools.
            </p>
          </div>
          <div className="featureCard">
            <h3>Smart Management Tools</h3>
            <p>
              From ticketing and RSVPs to real-time analytics, manage everything
              effortlessly.
            </p>
          </div>
          <div className="featureCard">
            <h3>Seamless Discovery</h3>
            <p>
              Connect with your ideal audience and grow your community with our
              powerful outreach features.
            </p>
          </div>
          <div className="featureCard">
            <h3>Dedicated Support</h3>
            <p>
              Our team is here to assist you every step of the way, ensuring
              your success.
            </p>
          </div>
        </div>
      </section>

      <section className="teamSection">
        <h2>Meet the Visionaries Behind Highlight Events</h2>
        <p className="teamIntro">
          Behind every successful event on our platform is a dedicated team
          driven by innovation and community. Get to know the passionate
          individuals who make Highlight Events shine.
        </p>
        <div className="teamMembersGrid">
          <div className="teamMemberCard">
            <img
              src="https://images.pexels.com/photos/4467683/pexels-photo-4467683.jpeg"
              alt="Alexandra Rivera, Founder & CEO"
            />
            <h4>Alexandra Rivera</h4>
            <p className="role">Founder & CEO</p>
            <a href="mailto:alex@highlightevents.com" className="emailLink">
              alex@highlightevents.com
            </a>
          </div>

          <div className="teamMemberCard">
            <img
              src="https://pyxis.nymag.com/v1/imgs/843/519/c94987157876623c19cfbc55c9443cf581-john-wick.rhorizontal.w700.jpg"
              alt="John Wick, Head of Design (stylized for character)"
            />
            <h4>John Wick</h4>
            <p className="role">Head of Design</p>
            <a href="mailto:jamie@highlightevents.com" className="emailLink">
              jamie@highlightevents.com
            </a>
          </div>

          <div className="teamMemberCard">
            <img
              src="https://images.pexels.com/photos/12903197/pexels-photo-12903197.jpeg"
              alt="Taylor Morgan, Community Manager"
            />
            <h4>Taylor Morgan</h4>
            <p className="role">Community Manager</p>
            <a href="mailto:taylor@highlightevents.com" className="emailLink">
              taylor@highlightevents.com
            </a>
          </div>
        </div>
      </section>

      <section className="actionSection">
        <h2>Ready to Create Something Amazing?</h2>
        <p>
          Have a question or idea? We'd love to hear from you and help you make
          your next event unforgettable.
        </p>
        <button onClick={ContactPage}>Contact us</button>
        <a href="mailto:hello@highlightevents.fi"></a>
      </section>
    </div>
  );
};

export default About;
