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
import Loader from "../images/loader.webp";
import { useEffect, useState } from "react";

function App() {
  const [showLoader, SetShowLoader] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      SetShowLoader(false);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      {showLoader && (
        <div className="h-screen fixed w-full z-[999999] overflow-hidden flex items-center justify-center bg-black ">
          <img src={Loader} className="w-[60%]" />
        </div>
      )}
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
            <div>
              <NavBar />
              <div className="pt-24 py-9 px-4 w-fit sm:w-full bg-vrbg bg-cover">
                <Dashboard />
              </div>
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
