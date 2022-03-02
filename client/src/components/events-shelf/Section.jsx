import { useState } from "react";
import "./events.css";
import Shelf from "./Shelf";
import Book from "./Book";
// import { data, dummy } from "./data.js";
import Data from "../events/Data";

function EventSection({ children }) {
  // const [showModal, setShowModal] = useState(false);
  // const [modalDetails, setModalDetails] = useState(dummy);

  return (
    <div className="events-page bg-[#000A0C]" id="eventshelf">
      <section className="events-section p-4 m-12 sm:p-8">
        {/* <Modal
          show={showModal}
          details={modalDetails}
          clickHandler={() => {
            setShowModal(false);
          }}
        /> */}
        <div className="text-center font-bold text-4xl md:text-6xl">
          <span className="text-white">EVENTS' </span>
          <span className="text-cyan-400"> SHELF </span>
        </div>
        <Shelf>
          {Data.map((details) => (
            <Book details={details} key={details.name} />
          ))}
        </Shelf>
      </section>
    </div>
  );
}
export default EventSection;
