const EventCategoryButtons = ({ setType }) => {
  return (
    <section className="categorySection">
      <h2>Browse by Category</h2>
      <div className="categoryButtons">
        <button onClick={() => setType("Outdoor & Nature")}>
          🌿 Outdoor & Nature
        </button>
        <button onClick={() => setType("Food & Social")}>
          🥗 Food & Social
        </button>
        <button onClick={() => setType("Hobbies & DIY")}>
          🎨 Hobbies & DIY
        </button>
        <button onClick={() => setType("Learning & Networking")}>
          📝 Learning & Networking
        </button>
        <button onClick={() => setType("Health & Wellness")}>
          🌸 Health & Wellness
        </button>
        <button onClick={() => setType("Music & Entertainment")}>
          🎤 Music & Entertainment
        </button>
        <button onClick={() => setType("Markets & Swaps")}>
          🛍️ Markets & Swaps
        </button>
        <button onClick={() => setType("Family & Kids")}>
          🧸 Family & Kids
        </button>
        <button onClick={() => setType("Sports & Games")}>
          🏀 Sports & Games
        </button>
        <button onClick={() => setType("Parties & Celebration")}>
          🎉 Parties & Celebration
        </button>

        <button onClick={() => setType(null)}>Show All</button>
      </div>
    </section>
  );
};

export default EventCategoryButtons;
