import "./mapModal.css"

function OpenMapButton({ location }) {
  function openMap() {
    const url =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(location);
    window.open(url, "_blank");
  }

return (
  <>
    {location} <button onClick={openMap} className="mapButton">Open in Google Maps</button>
  </>
);
}
export default OpenMapButton;
