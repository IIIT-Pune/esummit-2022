import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center space-y-8 p-4 pt-14 mb-14 sm:p-8 text-white font-Montserrat "
        id="about"
      >
        <div className="text-center font-bold text-4xl md:text-6xl justify-center items-center flex flex-col">
          <div>
          <span className="">ABOUT </span>
            <span className="text-cyan-400"> E-SUMMIT </span>
            </div>
        <hr className="secheadingabout"/>
        </div>

        <div className="relative z-10 space-y-8 text-2xs md:text-2xl w-4/5">
          <p className="text-justify">
            E-Summit’22 is the largest entrepreneurship conclave ever by E-Cell,
            IIIT Pune with the vision of Making Impossible Inevitable. A gamut
            of exciting events, speaker sessions and workshops, E-Summit’22 is a
            9-days long online event with the most incredible profusion of
            entrepreneurship-related challenges to forefront innovation and
            usher in new ideas.
          </p>
          <p className="text-justify">
            E-Summit’22 is the ultimate entrepreneurship summit of the year
            converging towards the realm of future startups by reflecting Global
            Financial Capitals in Metaverse. With Metaverse steering us closer
            towards globalisation by eliminating the “where” factor in our
            lives, the global financial capitals will soon find themselves
            immersed in this world of virtual cohabitation and gun for top
            talents worldwide without geographical concerns. E-Summit’22 wishes
            to contribute to the Metaverse supremacy by providing equal
            opportunities to everyone without worrying about the “where”.
          </p>
          {/* <p className="text-justify text-2xs">
            E-Summit’22 is a visionary platform to help the community of
            entrepreneurs boost their entrepreneurial temperament, elevate
            existing entrepreneurial skills and establish new ones through
            opportunities to ideate and showcase the innovative potential of the
            youth.
          </p> */}
          <h1 className="absolute font-[heading] -z-10 text-cyan-400 text-[10rem] opacity-20 right-10 bottom-0">
            22
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
