import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";
import linesanddots from "../images/linesanddots.png";
import globe from "../images/dots.png";
import shine from "../images/shine.png";
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
      }
      if (preScrollY.current < currentScrollY && !goingUp) {
        setgoingUp(true);
      }
      preScrollY.current = currentScrollY;
      let value = window.scrollY;
      animate.style.top = value * 2.5 + "px";
      animate.style.opacity = 1 - value / 50;
      animate.style.transition = "0.7s";
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  let animate = document.getElementById("animate");
  let text = document.getElementById("text");

  const countdown = () => {
    const countDate = new Date("March 28, 2022 :00:00").getTime();
    // console.log(countDate);
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(gap / day);
    textDay = textDay < 10 ? "0" + textDay : textDay;
    var textHour = Math.floor((gap % day) / hour);
    textHour = textHour < 10 ? "0" + textHour : textHour;
    var textMinute = Math.floor((gap % hour) / minute);
    textMinute = textMinute < 10 ? "0" + textMinute : textMinute;
    var textSecond = Math.floor((gap % minute) / second);
    textSecond = textSecond < 10 ? "0" + textSecond : textSecond;

    if (gap < 0) {
      clearInterval();
    } else {
      document.querySelector(".day-time").innerText = textDay;
      document.querySelector(".hour-time").innerText = textHour;
      document.querySelector(".minute-time").innerText = textMinute;
      document.querySelector(".second-time").innerText = textSecond;
    }
  };
  useEffect(() => {
    setInterval(countdown, 1000);
    return () => {
      clearInterval();
    };
  });
  let vid = document.getElementById("popup");
  let ytvid = document.getElementById("ytvid");
  let close = document.getElementsByClassName("close");
  function Show() {
    vid.style.visibility = "visible";
  }
  function Hide() {
    var iframe = popup.getElementsByTagName("iframe")[0];
    var url = iframe.getAttribute("src");
    iframe.setAttribute("src", "");
    iframe.setAttribute("src", url);
    vid.style.visibility = "hidden";
  }
  return (
    <div className="Main">
      <div id="animate">
        <div id="banner">
          <div id="links" className="dance">
            <div id="youtube">
              <img src={play} className="icons" />
              <a className="hov" href="javascript:void(0)" onClick={Show}>
                <span className="linktxt">Watch Teaser</span>
              </a>
            </div>
            <div id="reminder">
              <img src={calender} className="icons" />
              <a className="hov" href="#">
                <span className="linktxt">19-27 March'22</span>
              </a>
            </div>
            <div id="discord">
              <img src={discord} className="icons" />
              <a className="hov" href="https://discord.gg/ASDahbGy">
                <span className="linktxt">Join Discord</span>
              </a>
            </div>
          </div>
          <span id="text" className="dance">
            E-SUMMIT
          </span>
        </div>
      </div>
      <div id="popup">
        <iframe
          className="ytvid"
          width="auto"
          height="100%"
          src="https://www.youtube.com/embed/65SudyBdaxk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button id="close" onClick={Hide}>
          X
        </button>
      </div>
      <div id="btndiv" className="">
        <div id="countdown">
          <div className="count">
            <h3 className="Day day-time">00</h3>
            <h3 className="Daytxt">DAY</h3>
          </div>
          <div className="count">
            <h3 className="Hour hour-time">00</h3>
            <h3 className="Hourtxt">HR</h3>
          </div>
          <div className="count">
            <h3 className="Minute minute-time">00</h3>
            <h3 className="Minutetxt">MIN</h3>
          </div>
          <div className="count">
            <h3 className="Second second-time">00</h3>
            <h3 className="Secondtxt">SEC</h3>
          </div>
        </div>
      </div>
      <div className="images ">
        <img className="lines " src={linesanddots} alt="linesanddots" />
        <img className="globe" src={globe} alt="globe" />
        <img className="shine" src={shine} alt="Shine" />
      </div>
    </div>
  );
}
