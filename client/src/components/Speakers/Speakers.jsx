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
          <div className="text-center font-bold text-4xl md:text-6xl font-Montserrat flex flex-col items-center justify-center">
            <div><span className="text-white">SPEAKER </span>
            <span className="text-cyan-400"> SESSIONS </span></div>
            <hr className="secheading"/>
          </div>
        </div>
        <div
          className="ca"
          style={{
            position: "relative",
            marginBottom: "50px",
            width: "80%",
            marginLeft: "10%",
          }}
        >
          <div
            className="row flex flex-col gap-y-8 items-center lg:flex-row justify-around"
            style={{ marginTop: "100px" }}
          >
            <div className="col-md-4">
              <SpeakerCard
                name={"Prasoon Gupta"}
                details={"Cofounder - Satvikko"}
                date={"25 MARCH 4:00 PM"}
                picture={"https://i.ibb.co/N3xNss4/Prasoon-Gupta.png"}
                lk={
                  "https://www.linkedin.com/in/prasoongupta/?originalSubdomain=in"
                }
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Dr. Annurag Batra"}
                details={"Chairman - Businessworld"}
                date={"25 MARCH 6:00 PM"}
                picture={"https://i.ibb.co/xjHWGhH/Dr-Annurag-Batra.png"}
                lk={
                  "https://www.linkedin.com/in/batraanurag/?originalSubdomain=in"
                }
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Mahalakshmi Saravana"}
                details={"Founder-Women Entrepreneurs India"}
                date={"26 MARCH 4:00 PM"}
                picture={"https://i.ibb.co/V9Gkrhq/Mahalakshmi.png"}
                lk={"https://www.linkedin.com/in/mahalakshmisaravanan/"}
              />
            </div>
          </div>
          <div className="row"></div>
          <div
            className="row flex flex-col gap-y-8 items-center lg:flex-row justify-around"
            style={{ marginTop: "30px" }}
          >
            <div className="col-md-4">
              <SpeakerCard
                name={"Sandeep Jain"}
                details={"Founder - GeeksForGeeks"}
                date={"26 MARCH 6:00 PM"}
                picture={"https://i.ibb.co/5rGXMjc/Sandeep-Jain.png"}
                lk={"https://www.linkedin.com/in/sandeep-jain-b3940815/"}
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Paresh Gupta"}
                details={"Founder & CEO - GCEC"}
                date={"27 MARCH 4:00 PM"}
                picture={"https://i.ibb.co/T05dBHH/Paresh-Gupta.jpg"}
                lk={"https://www.linkedin.com/in/pareshgupta1/"}
              />
            </div>
            <div className="col-md-4">
              <SpeakerCard
                name={"Arjun Vaidya "}
                details={"Founder - Dr.Vaidya's"}
                date={"27 MARCH 6:00PM"}
                picture={"https://i.ibb.co/nBb6kGR/Arjun-Vaidya.png"}
                lk={
                  "https://www.linkedin.com/in/arjunvaidya/?originalSubdomain=in"
                }
              />
            </div>
          </div>
        </div>
        <div className="sp"></div>
        <div className="text-white pt-10 px-4 tracking-wider font-Montserrat font-bold text-4xl text-center">
          . . . more to be added soon
        </div>
      </div>
    </div>
  );
}

export default Speakers;
