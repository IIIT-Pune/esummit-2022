import React from "react";

const GreetCard = (props) => {
  
  return (
    <div className="justify-center w-full md:w-1/2 bg-black text-sm md:py-2 items-center flex flex-col space-y-0 py-16">
      <div className="my-4 flex flex-col m-2 p-5 items-center ">
        <div className="mt-4 text-white text-center font-Poppins font-bold text-4xl">
          {props.greetCardTitle}
        </div>
        <div className="m-3 text-white text-center font-Poppins flex flex-col justify-center">
          {props.greetCardContent}
          {/* To keep connected with us please login with your personal info */}
        </div>
        <div>
          <button onClick={()=> props.SetShowSignUp(prev=>!prev)} className="text-white font-Poppins border-2 hover:bg-white hover:text-black text-base font-semibold rounded-full m-2 p-2 px-7">
            {props.greetCardButtonText}
            {/* LOGIN */}
          </button>
        </div>
      </div>
      <div>
        <img src="images\chatbot2.png" alt="" />
      </div>
    </div>
  );
};

export default GreetCard;
