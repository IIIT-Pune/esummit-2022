import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import linesanddots from "../images/linesanddots.png";
import globe from "../images/dots.png";
import shine from "../images/shine.png";
import chatbot from "../images/Chatbot.png";
import NavBar from "./NavBar";
import discord from "../Images/discord.png";
import calender from "../Images/calender.png";
import play from "../Images/play.png";

export default function Homepage() {
  const preScrollY = useRef(0);
  const [goingUp, setgoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (preScrollY.current < currentScrollY && goingUp) {
        setgoingUp(false);
        // text.classList.add('dance');
      }
      if (preScrollY.current < currentScrollY && !goingUp) {
        setgoingUp(true);
        // text.classList.remove('dance');
      }
      preScrollY.current = currentScrollY;
      let value = window.scrollY;
      animate.style.top = value * 2.5 + "px";
      animate.style.opacity = 1 - value / 50;
      animate.style.zIndex = 1;
      // animate.style.transitionTimingFunction = "ease-in-out";
      animate.style.transition = "0.7s";
      value > 0 ? btn.style.visibility = "hidden" : btn.style.visibility = "visible";
      
      value>0? text.classList.remove('dance'):text.classList.add('dance');
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  let animate = document.getElementById("animate");
  let text = document.getElementById("text");
  let btn = document.getElementById("btn");
  window.addEventListener("scroll", function () { });

  const countdown = () => {
    const countDate = new Date("March 28, 2022 :00:00").getTime();
    // console.log(countDate);
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

    if (gap < 0) {
      clearInterval();
    }
    else {
      document.querySelector(".day-time").innerText = textDay;
    document.querySelector(".hour-time").innerText = textHour;
    document.querySelector(".minute-time").innerText = textMinute;
    document.querySelector(".second-time").innerText = textSecond;
    }
  };
  useEffect(() => {
    setInterval(countdown, 1000);
    return () => {
      clearInterval()
    };
  })
  
  return (
    <div className="Main">
      <div id="animate">
        <div id="banner">
          <div id='links' className="dance">
            <div id='youtube'>
              <img src={play} className="icons"/>
              <a className='hover' src=''><span>Watch Teaser</span></a>
            </div>
            <div id='reminder'>
              <img src={calender} className="icons"/>
              <a className='hover' src=''><span>March 19</span></a>
            </div>
            <div id='discord'>
              <img src={discord} className="icons"/>
              <a className='hover' src=''><span>Join Discord</span></a>
            </div>
          </div>
          <span id="text" className="dance">E-SUMMIT</span>
        </div>
      </div>
      <div id='btndiv'>
          <div id="countdown">
            <div className="count">
              <h3 className="Day day-time">00</h3>
              <h3 className="Day">DAY</h3>
            </div>
            <div className="count">
              <h3 className="Hour hour-time">00</h3>
              <h3 className="Hour">HOUR</h3>
            </div>
            <div className="count">
              <h3 className="Minute minute-time">00</h3>
              <h3 className="Minute">MIN</h3>
            </div>
            <div className="count">
              <h3 className="Second second-time">00</h3>
              <h3 className="Second">SEC</h3>
            </div>
          </div>
        {/* <button
                  type="submit" id='btn'
                  className="text-white border-2 hover:bg-white border-white hover:text-black font-semibold rounded-full m-2 p-2 px-3"
                >
                  Join Discord
                </button> */}
        </div>
      <div className="images">
        <img className="lines " src={linesanddots} alt="linesanddots" />
        <img className="globe" src={globe} alt="globe" />
        <img className="shine" src={shine} alt="Shine" />
        {/* <img className="chatbot" src={chatbot} alt="Chatbot" /> */}
      </div>
    </div>
  );
}
