import React from "react";
// import "./About.css";
const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-8 m-4 my-14 p-4 sm:p-8 text-white font-Montserrat ">
        <div className="text-center font-bold text-4xl md:text-6xl">
          <span className="">ABOUT </span>
          <span className="text-cyan-400"> E-SUMMIT </span>
        </div>
        <div className="relative space-y-8 text-2xs md:text-2xl w-4/5">
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
          <h1 className="absolute text-cyan-400 font-bold text-9xl opacity-50 right-0 bottom-20">
            22
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
