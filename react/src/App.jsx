import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Frontpage from "./pages/Frontpage/Frontpage";
import About from "./pages/About/About";
import AddEvent from "./pages/AddEvent/AddEvent";
import EventList from "./pages/EventPage/EventListItems/EventList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import EventDetails from "./pages/EventDetailsPage/EventDetails";
import EventContainer from "./pages/EventPage/EventContainer/EventContainer";
import "./App.css";
import UserAuthentication from "./pages/UserAuthentication/UserAuthentication";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Frontpage />} />
            <Route path="/authentication" element={<UserAuthentication />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventContainer />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/edit" element={<EventList />} />
          </Routes>
          <button
            className="backToTop"
            onClick={() => window.scrollTo({ top: 0 })}
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
