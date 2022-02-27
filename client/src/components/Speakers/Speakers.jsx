import React from "react";
import SpeakerCard from "./SpeakerCard";
import "./Speakers.css";
const Pict =
	"https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";

function Speakers() {
	return (
		<div className="bg-black">
			<div className="container">
				<div className="headtx">
					SPEAKER <span style={{ color: "#68D4E8" }}>SESSIONS</span>
				</div>
			</div>
			<div className="container">
				<div className="row" style={{ marginTop: "114px" }}>
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
					className="row"
					style={{ marginTop: "120px", marginBottom: "50px" }}
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
		</div>
	);
}

export default Speakers;
