import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import ButtonCmp from "./ButtonCmp";
import { useState } from "react";
import axios from "axios";
import baseUrl from "../../baseUrl";
import { useNavigate } from "react-router-dom";

const SignUpCapForm = (props) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [PasswordError, setPasswordError] = useState("");
  const [MailError, setMailError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
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

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Password and Confirm Password should match.");
      // alert("Password and Confirm Password not matched");
      return;
    } else {
      setPasswordError("");
    }

    axios
      .post(`${baseUrl}api/auth/createuser`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        const data = res.data;
        if (data.error) {
          alert(data.error);
        }
        if (data.success) {
          localStorage.setItem("token", JSON.stringify(data.authtoken));
          navigate("/leaderboard");
        }
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="justify-center w-full md:w-1/2 bg-white text-sm md:py-2 items-center flex flex-col space-y-2 py-16 vertical-middle">
        <div className="mt-5 p-2 text-4xl font-Poppins text-center font-bold">
          Create Account
        </div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="px-8 my-4 w-80">
            <div className="mb-4">
              {/* <label className="block">Name</label> */}
              <input
                className="shadow border-2 border-gray-400 rounded w-full bg-slate-200 px-3 py-2 "
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => {
                  setformData((data) => ({
                    ...data,
                    name: e.target.value,
                  }));
                }}
                required
              />
            </div>
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
                minLength="5"
                required
              />
            </div>
            <div className="mb-4">
              {/* <label className="block">Password</label> */}
              <input
                className="shadow border-2 border-gray-400 rounded w-full bg-slate-200 px-3 py-2"
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => {
                  setformData((data) => ({
                    ...data,
                    confirmPassword: e.target.value,
                  }));
                }}
                required
              />
              <div className="pt-1 ml-3 text-red-500 font-Montserrat text-xs">
                {PasswordError}
              </div>
            </div>
          </div>
          <ButtonCmp>
            {/* {props.capFormButtonText} */}
            SIGN UP
          </ButtonCmp>
        </form>
      </div>
    </>
  );
};

export default SignUpCapForm;
