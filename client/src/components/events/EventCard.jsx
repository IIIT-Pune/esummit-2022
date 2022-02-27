import React from "react";
import eventIcon from "../Images/events/icons/eventicon.png";
import qrCode from "../Images/events/qr/d2c.png";

const EventCard = (props) => {
  return (
    <div className="flex justify-center items-center lg:m-16 m-10">
      <div className="flex h-fit text-white font-Montserrat font-medium bg-black bg-opacity-50 backdrop-blur lg:w-3/5 p-8 m-2">
        <div className="flex flex-col lg:flex-row justify-center w-full">
          <div className="lg:w-2/5 flex flex-col space-y-4 justify-center items-center text-center">
            <div>
              <img src={eventIcon} alt="" />
            </div>
            <div className="text-5xl font-bold">
              {props.whiteText}{" "}
              <span className="text-cyan-300">{props.blueText}</span>
            </div>
            <img src={qrCode} alt="" />
            <button
              type="submit"
              className="text-white border-2 hover:bg-white border-white hover:text-black font-bold rounded-full m-2 p-2"
            >
              REGISTER NOW
            </button>
          </div>
          <div className="lg:w-3/5 mt-4 space-y-4 divide-y divide-cyan-400 text-center">
            {/* right-col */}
            <div className="space-y-3">
              <div className="tracking-wider">
                Team Size: {props.teamSize} Members
              </div>
              <div className="tracking-wider">
                Cash Prizes upto INR {props.cashPrize}
              </div>
              {/* Rulebook Button */}
              <div>
                <button
                  type="submit"
                  className="text-cyan-200 border-2 hover:bg-cyan-700 border-cyan-200 hover:text-white font-bold rounded-full m-2 p-2 px-3"
                >
                  RULEBOOK
                </button>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-justify">{props.eventDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
