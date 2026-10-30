import { useNavigate } from "react-router";

const EventCategoryButtons = () => {
  const navigate = useNavigate();

  return (
    <section className="categorySection">
      <h2>Browse by Category</h2>

      <div className="categoryButtons">
        <button onClick={() => navigate("/events/category/Outdoor & Nature")}>
          🌿 Outdoor & Nature
        </button>
        <button onClick={() => navigate("/events/category/Food & Social")}>
          🥗 Food & Social
        </button>
        <button onClick={() => navigate("/events/category/Hobbies & DIY")}>
          🎨 Hobbies & DIY
        </button>
        <button
          onClick={() => navigate("/events/category/Learning & Networking")}
        >
          📝 Learning & Networking
        </button>
        <button onClick={() => navigate("/events/category/Health & Wellness")}>
          🌸 Health & Wellness
        </button>
        <button
          onClick={() => navigate("/events/category/Music & Entertainment")}
        >
          🎤 Music & Entertainment
        </button>
        <button onClick={() => navigate("/events/category/Markets & Swaps")}>
          🛍️ Markets & Swaps
        </button>
        <button onClick={() => navigate("/events/category/Family & Kids")}>
          🧸 Family & Kids
        </button>
        <button onClick={() => navigate("/events/category/Sports & Games")}>
          🏀 Sports & Games
        </button>
        <button
          onClick={() => navigate("/events/category/Parties & Celebration")}
        >
          🎉 Parties & Celebration
        </button>
      </div>
    </section>
  );
};

export default EventCategoryButtons;
