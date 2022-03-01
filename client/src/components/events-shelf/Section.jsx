import { useState } from "react";
import "./events.css";
import Modal from "./Modal";
import Shelf from "./Shelf";
import Book from "./Book";

const data = [
  {
    name: "POKER",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "BIDCON",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "BUSINESS QUIZ",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "STOCK TRADING",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "CRYPTO TRADING",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "FLAWLESS",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "BRAINS ON FIRE",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "TREASURE HUNT",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "HOOKED WITH UP DESIGN",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "PITCH PERFECT",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "TOP TALKS",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "DEAL NO DEAL",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "SALE ABLE",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "",
  },
  {
    name: "AD MAD",
    logolink: "",
    d2clink: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
    knowmore: "/event",
  },
];
const dummy = {
  name: "Event",
  logolink: "link",
  d2clink: "",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta eu, neque eu sagittis, leo fames. Non non vitae eu sagittis orci, elementum amet semper. Urna nulla tristique eu sed. Id tellus.",
  knowmore: "",
};
function EventSection({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState(dummy);

  return (
    <div className="events-page bg-[#000A0C]" id="eventshelf">
      <section className="events-section p-4 m-12 sm:p-8">
        <Modal
          show={showModal}
          details={modalDetails}
          clickHandler={() => {
            setShowModal(false);
          }}
        />
        <div className="text-center font-bold text-4xl md:text-6xl">
          <span className="text-white">EVENTS' </span>
          <span className="text-cyan-400"> SHELF </span>
        </div>
        <Shelf>
          {data.map((details) => (
            <Book
              details={details}
              clickHandler={(details) => {
                setModalDetails(details);
                setShowModal(true);
              }}
              key={details.name}
            />
          ))}
        </Shelf>
      </section>
    </div>
  );
}
export default EventSection;
