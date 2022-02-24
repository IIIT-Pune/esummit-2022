import React from 'react';
import "./HomePage.css";
import linesanddots from "./images/linesanddots.png";
import globe from "./images/dots.png";

export default function Homepage() {
  // const [offset, setoffsetY] = useState();
  // 
  // const handleScroll = () => {
  //   setoffsetY(window.pageYOffset);
  // }
  // window.addEventListener('scroll', handleScroll);
  
  let text = document.getElementById('text');
    window.addEventListener('scroll', function () {
      let value = window.scrollY;
      text.style.top = value * 2.25 + 'px';
      text.style.opacity = 1 - value / 50;
      // text.style.zIndex = 1 - value / 50;
      text.style.transitionTimingFunction = "ease-in-out";
    });
  return (
          <div className='Main'>
        <div id='banner'>
          <span id="text">E-SUMMIT</span>
              </div>
                <div className='images'>
                  <img className='lines' src={linesanddots} alt="linesanddots"/>
                  <img className='globe' src={globe} alt="globe"/>
                </div>
          </div>
  )
}