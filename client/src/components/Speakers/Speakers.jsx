import React from "react";
import SpeakerCard from "./SpeakerCard";
import "./Speakers.css";
const Pict =
  "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";

function Speakers() {
  return (
    <div className="use-boostrap" id="speakers">
      <div className="bk" style={{ backgroundColor: "#000A0C" }}>
        <div
          className="cont"
          style={{ textAlign: "center", paddingTop: "20px" }}
        >
          {/* <div className="headtx">
            <span
              style={{
                color: "#ffff",
                fontSize: "60px",
                marginRight: "20px",
                fontWeight: "normal",
              }}
            >
              SPEAKER{" "}
            </span>
            <span
              style={{
                color: "#68D4E8",
                fontSize: "60px",
                fontWeight: "normal",
              }}
            >
              SESSIONS
            </span>
          </div> */}
          <div className="text-center font-bold text-4xl md:text-6xl">
            <span className="text-white">SPEAKER </span>
            <span className="text-cyan-400"> SESSIONS </span>
          </div>
        </div>
        <div className="ca" style={{ marginBottom: "50px" }}>
          <div
            className="row flex flex-col gap-y-8 items-center lg:flex-row justify-around"
            style={{ marginTop: "114px" }}
          >
            <div className="col-md-4">
              <SpeakerCard
                name={"Speaker Name"}
                details={"Details"}
                date={"Date and Time"}
                picture={Pict}
                lk={"#"}
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Speaker Name"}
                details={"Details"}
                date={"Date and Time"}
                picture={Pict}
                lk={"#"}
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Speaker Name"}
                details={"Details"}
                date={"Date and Time"}
                picture={Pict}
                lk={"#"}
              />
            </div>
          </div>
          <div className="row"></div>
          <div
            className="row flex flex-col gap-y-8 items-center lg:flex-row justify-around"
            style={{ marginTop: "120px" }}
          >
            <div className="col-md-4">
              <SpeakerCard
                name={"Speaker Name"}
                details={"Details"}
                date={"Date and Time"}
                picture={Pict}
                lk={"#"}
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Speaker Name"}
                details={"Details"}
                date={"Date and Time"}
                picture={Pict}
                lk={"#"}
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Speaker Name"}
                details={"Details"}
                date={"Date and Time"}
                picture={Pict}
                lk={"#"}
              />
            </div>
          </div>
        </div>
        <div className="sp"></div>
      </div>
    </div>
  );
}

export default Speakers;
