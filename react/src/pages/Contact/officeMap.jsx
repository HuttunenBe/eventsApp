import "./contactPage.css";

const officeMap = () => {
  return (
    <section className="map">
      <h2>Find Us</h2>

      <iframe
        title="Office location on Google Maps"
        src="https://maps.google.com/maps?q=Annankatu%2C%20Helsinki%2C%20Finland&z=14&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default officeMap;
