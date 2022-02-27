import React, { useState, useEffect, useRef } from "react";
import "./Homepage.css";
import linesanddots from "../images/linesanddots.png";
import globe from "../images/dots.png";
import shine from "../images/shine.png";
import chatbot from "../images/Chatbot.png";
import NavBar from "./NavBar";

export default function Homepage() {
  const preScrollY = useRef(0);
  const [goingUp, setgoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) return;
      if (preScrollY.current < currentScrollY && goingUp) {
        setgoingUp(false);
      }
      if (preScrollY.current < currentScrollY && !goingUp) {
        setgoingUp(true);
      }
      preScrollY.current = currentScrollY;
      let value = window.scrollY;
      text.style.top = value * 2.25 + "px";
      text.style.opacity = 1 - value / 50;
      text.style.zIndex = 1;
      text.style.transitionTimingFunction = "ease-in-out";
      value > 0
        ? (btn.style.visibility = "hidden")
        : (btn.style.visibility = "visible");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp, window.scrollY]);

  const countdown = () => {
    const countDate = new Date("Feburary 28, 2022 00:00:00").getTime();
    console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".day-time").innerText = textDay;
    document.querySelector(".hour-time").innerText = textHour;
    document.querySelector(".minute-time").innerText = textMinute;
    document.querySelector(".second-time").innerText = textSecond;
  };
  setInterval(countdown, 1000);
  let animate = document.getElementById("animate");
  let btn = document.getElementById("btn");
  window.addEventListener("scroll", function () {});

  let text = document.getElementById("text");
  window.addEventListener("scroll", function () {});
  return (
    <div className="overflow-hidden">
      <div id="animate">
        <div id="banner">
          <span id="text">E-SUMMIT</span>
          <div id="countdown">
            <div class="count">
              <h3 class="Day day-time"></h3>
              <h3 class="Day">Day</h3>
            </div>
            <div class="count">
              <h3 class="Hour hour-time"></h3>
              <h3 class="Hour">Hour</h3>
            </div>
            <div class="count">
              <h3 class="Minute minute-time"></h3>
              <h3 class="Minute">Min</h3>
            </div>
            <div class="count">
              <h3 class="Second second-time"></h3>
              <h3 class="Second">Sec</h3>
            </div>
          </div>
        </div>
      </div>
      <div id="btndiv">
        <button
          type="submit"
          id="btn"
          className="text-white border-2 hover:bg-white border-white hover:text-black font-semibold rounded-full m-2 p-2 px-3"
        >
          REGISTER NOW
        </button>
      </div>
      <div className="images">
        <img className="lines" src={linesanddots} alt="linesanddots" />
        <img className="globe" src={globe} alt="globe" />
        <img className="shine" src={shine} alt="Shine" />
        <img className="chatbot" src={chatbot} alt="Chatbot" />
      </div>
    </div>
  );
}
