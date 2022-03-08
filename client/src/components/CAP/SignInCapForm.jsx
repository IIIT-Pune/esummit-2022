import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import ButtonCmp from "./ButtonCmp";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";

const SignInCapForm = (props) => {
	const [MailError, setMailError] = useState("");
	const [loading, Setloading] = useState(false);
	const [formData, setformData] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		let flag = 1;
		Object.values(formData).map((obj) => {
			if (obj === "") {
				flag = 0;
			}
		});
		if (flag === 0) {
			alert("Please Fill the form");
			return;
		}
		const ex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!ex.test(formData.email)) {
			setMailError("Enter valid Email ID.");
			return;
		} else if (MailError.email != "") {
			setMailError("");
		}
		Setloading(true);
		await axios
			.post(`${baseUrl}api/auth/login`, {
				email: formData.email,
				password: formData.password,
			})
			.then((res) => {
				const data = res.data;
				if (data.error) {
					alert(data.error);
				}
				console.log(data);
				if (data.success) {
					localStorage.setItem("token", JSON.stringify(data.authtoken));
					navigate("/leaderboard");
				}
				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		Setloading(false);
	};

	return (
		<>
			<div className="justify-center w-full md:w-1/2 bg-white text-sm md:py-2 items-center flex flex-col space-y-2 py-16 vertical-middle">
				<div className=" p-2 mb-4 text-4xl font-Poppins text-center font-bold">
					Welcome Back!
				</div>
				<form className="flex flex-col items-center" onSubmit={handleSubmit}>
					<div className="px-8 my-4 mb-6 w-80">
						<div className="mb-4">
							{/* <label className="block">Email</label> */}
							<input
								className="shadow border-2 border-gray-400 rounded w-full bg-slate-200 px-3 py-2"
								type="email"
								placeholder="Email"
								id="email"
								name="email"
								value={formData.email}
								onChange={(e) => {
									setformData((data) => ({
										...data,
										email: e.target.value,
									}));
								}}
								required
							/>
							<div className="pt-1 ml-3 text-red-500 font-Montserrat text-xs">
								{MailError}
							</div>
						</div>
						<div className="mb-4">
							{/* <label className="block">Password</label> */}
							<input
								className="shadow border-2 border-gray-400 rounded w-full bg-slate-200 px-3 py-2"
								type="password"
								placeholder="Password"
								id="password"
								name="password"
								value={formData.password}
								onChange={(e) => {
									setformData((data) => ({
										...data,
										password: e.target.value,
									}));
								}}
								required
							/>
						</div>
					</div>
					<ButtonCmp loading={loading}>
						{/* {props.capFormButtonText} */}
						{loading ? "Processing.." : "LOGIN"}
					</ButtonCmp>
				</form>
			</div>
		</>
	);
};

export default SignInCapForm;
