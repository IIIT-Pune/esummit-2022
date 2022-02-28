import React from "react";
// import "./About.css";
const About = () => {
  return (
    <>
      <div className="flex-row justify-center items-center w-100 h-screen bg-black text-white font-Montserra">
        <div className="text-center">
          <span className="font-bold text-5xl">ABOUT </span>
          <span className="font-bold text-cyan-400 text-5xl">E-SUMMIT </span>
        </div>
        <div className="relative w-60vw h-80 pt-10">
          <p className="text-justify text-2xl pr-20 pl-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            quisque eu phasellus cum. Morbi nec massa convallis et risus diam,
            aliquam. Gravida scelerisque quisque donec aliquam enim ultrices
            pulvinar. Purus vitae eu id habitant velit. Erat dui, vel sed vel.
            Mollis nunc sed facilisis sed vitae id sit euismod feugiat. Proin et
            nulla enim, porta metus turpis quam sed nulla. Lorem eros, egestas
            volutpat neque, tempor adipiscing magna. Dui tellus.
          </p>
          <h1 className="absolute text-cyan-400 font-bold text-9xl opacity-50 right-20 bottom-0">22</h1>
        </div>
      </div>
    </>
  );
};

export default About;
