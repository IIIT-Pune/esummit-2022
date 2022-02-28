import React from "react";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-footer p-4 flex flex-col justify-center items-center">
        <div className="space-x-2 flex flex-row justify-center items-center p-4">
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="p-2 border-2 border-black rounded-full bg-cyan-400 hover:bg-cyan-500"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faYoutube}
              size="lg"
              className="p-2 border-2 border-black rounded-full bg-cyan-400 hover:bg-cyan-500"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="p-2 border-2 border-black rounded-full bg-cyan-400 hover:bg-cyan-500"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="p-2 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faDiscord}
              size="lg"
              className="p-2 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
        </div>
        <hr />
        <div className="flex items-center justify-center font-bold">
          <div className="space-x-8">
            <a href="#" className="nav-link nav-link-ltr ">
              HOME
            </a>
            <a href="#" className="nav-link nav-link-ltr ">
              TEAM
            </a>

            <a href="/#eventshelf" className="nav-link nav-link-ltr">
              EVENTS
            </a>

            <a href="/#speakers" className="nav-link nav-link-ltr ">
              SPEAKERS
            </a>

            <a href="#" className="nav-link nav-link-ltr ">
              SPONSORS
            </a>
          </div>
        </div>
      </div>
      <div className="bg-cyan-300 p-2 font-Montserrat font-bold text-center">
        © E-Cell IIIT Pune | All rights reserved
      </div>
    </>
  );
};

export default Footer;
