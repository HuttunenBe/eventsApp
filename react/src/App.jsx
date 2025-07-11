import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "react-scroll-to-top";
import FrontPage from "./Pages/FrontPage/Frontpage";
import About from "./Pages/About/About";
import AddEvent from "./Pages/AddEvent/AddEvent";
import EventList from "./Pages/EventPage/EventListItems/EventList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EventDetails from "./Components/Events/EventDetailsPage/EventDetails";
import EventContainer from "./Pages/EventPage/EventContainer/EventContainer";
import "./App.css";
import UserAuthentication from "./Pages/UserAuthentication/UserAuthentication";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/authentication" element={<UserAuthentication />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventContainer />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/edit" element={<EventList />} />
          </Routes>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed",
              right: "1rem",
              bottom: "1rem",

              background: "linear-gradient(45deg, #e1649c, #8e44ad)",
              color: "white",
              padding: "1rem 1rem",
              borderRadius: "5rem",
              fontWeight: "700",
              border: "none",
              zIndex: 997,
            }}
          >
            Back to Top
          </button>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
