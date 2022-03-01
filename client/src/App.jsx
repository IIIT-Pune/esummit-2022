import "./App.css";
import Cap from "./components/CAP/Cap";
import Dashboard from "./components/CAP/dashboard/Dashboard";
import Homepage from "./components/Homepage/HomePage";
import NavBar from "./components/Homepage/NavBar";
import About from "./components/about/About";
import EventSection from "./components/events-shelf/Section";
import { Route, Routes } from "react-router-dom";
import Speakers from "./components/Speakers/Speakers";
import EventCard from "./components/events/EventCard";
import FaqSection from "./components/faqs/FaqSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <NavBar />
              <Homepage />
              <div className="bg-[#000A0C]">
                <div className="py-14 space-y-24">
                  <About />
                  <EventSection />
                  <Speakers />
                  <FaqSection />
                </div>
                <Footer />
              </div>
            </div>
          }
        />
        <Route
          path="event"
          element={
            <div>
              <NavBar />
              {/* Dummy Event */}
              <EventCard
                whiteText={"AD"}
                blueText={"MAD"}
                teamSize={"2-4"}
                cashPrize={"4,000"}
                eventDescription={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat, scelerisque proin blandit pretium nam fringilla amet, cursus. Nulla dolor convallis morbi placerat habitant nisl. Platea orci, pharetra eget est. Libero ut massa rhoncus viverra sit. Pretium imperdiet nunc, amet nisi, aliquam sodales purus, scelerisque. Nisl neque semper sit neque sodales at nulla. Enim tincidunt pellentesque dolor id nam sagittis est, magna. Cursus dignissim nec egestas et sagittis ornare dolor. Mauris vitae vitae dui eleifend sem. Lacus, semper congue ut aliquam imperdiet sit aliquam accumsan malesuada. Quis convallis diam leo tincidunt sit quis sit est. Blandit aliquam, duis semper et pretium enim, nisl aliquam dolor."
                }
              />
            </div>
          }
        />
        <Route
          path="campus"
          element={
            <div className="flex justify-center items-center lg:h-screen bg-vrbg bg-cover">
              <Cap />
            </div>
          }
        />
        <Route
          path="leaderboard"
          element={
            <div className="py-9 px-4 lg:h-screen  bg-vrbg bg-cover">
              <Dashboard />
            </div>
          }
        />
        <Route
          path="events/:event_name"
          element={
            <div>
              <NavBar />
              <EventCard />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="">
              <NavBar />
              <Homepage />
              <About />
              <EventSection />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
