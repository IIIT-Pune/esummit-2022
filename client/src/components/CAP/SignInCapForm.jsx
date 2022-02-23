import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import ButtonCmp from "./ButtonCmp";
import { useState } from "react";

const SignInCapForm = (props) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                className="shadow border rounded w-full bg-slate-200 px-3 py-2"
                type=""
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
              />
            </div>
            <div className="mb-4">
              {/* <label className="block">Password</label> */}
              <input
                className="shadow border rounded w-full bg-slate-200 px-3 py-2"
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
              />
            </div>
          </div>
          <ButtonCmp>
            {/* {props.capFormButtonText} */}
            LOGIN
          </ButtonCmp>
        </form>
      </div>
    </>
  );
};

export default SignInCapForm;
