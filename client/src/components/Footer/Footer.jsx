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
      <div className="bg-black p-4 flex flex-col justify-center items-center">
        <div className="space-x-2 flex flex-row justify-center items-center p-4">
          <a href="https://www.instagram.com/ecell_iiitp">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className="fa-fw p-2 py-2.5 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCBRfXeWo-YSFt25wlZGr30w">
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              className="fa-fw p-2 py-2.5 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
          <a href="https://www.linkedin.com/company/e-cell-iiit-pune/">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="fa-fw p-2 py-2.5 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
          <a href="mailto:ecell@iiitp.ac.in">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className="fa-fw p-2 py-2.5 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
          <a href="https://discord.com/invite/PP2EDvQSbA">
            <FontAwesomeIcon
              icon={faDiscord}
              size="xl"
              className="fa-fw p-2 py-2.5 border-2 border-black rounded-full bg-cyan-300 hover:bg-cyan-500"
            />
          </a>
        </div>
        <hr />
        <div className="flex items-center justify-center flex-nowrap font-bold">
          <div className="space-x-4 sm:space-x-8 ">
            <a href="/" className="nav-link nav-link-ltr ">
              HOME
            </a>
            <a href="/#about" className="nav-link nav-link-ltr ">
              ABOUT
            </a>

            <a href="/#eventshelf" className="nav-link nav-link-ltr">
              EVENTS
            </a>

            <a href="/#speakers" className="nav-link nav-link-ltr ">
              SPEAKERS
            </a>

            <a href="/#faqs" className="nav-link nav-link-ltr ">
              FAQS
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black p-3 font-Montserrat font-bold text-center text-cyan-400">
        © E-Cell IIIT Pune | All rights reserved
      </div>
    </>
  );
};

export default Footer;
