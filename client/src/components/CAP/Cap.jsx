import React from "react";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";

const Cap = () => {
  return (
    <div className="justify-center items-center flex flex-col md:flex-row">
      <div className="w-3/5 m-6 flex flex-col items-center">
        <div className="mb-3 font-Montserrat text-white text-center text-5xl">
          <span className="mb-4"> CAMPUS </span>
          <span className="text-black border bg-white py-0.3 px-1">
            AMBASSADOR
          </span>
        </div>
        <div className="lg:max-w-3xl w-screen p-10">
          <SignUpCard />
          {/* <SignInCard /> */}
        </div>
      </div>
      <div className="p-8 max-w-fit flex justify-center hidden lg:inline-block">
        <img
          src="./src/assets/vrface2.png"
          className="mx-8 object-scale-down w-96"
          alt=""
        />
      </div>
    </div>
  );
};

export default Cap;
