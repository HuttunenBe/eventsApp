function OpenMapButton({ location }) {
  function openMap() {
    const url =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(location);
    window.open(url, "_blank");
  }

  return <button onClick={openMap}>Open {location} in Google Maps</button>;
}

export default OpenMapButton;
