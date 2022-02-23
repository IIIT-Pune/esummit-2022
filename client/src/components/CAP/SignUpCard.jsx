import React from "react";
import SignUpCapForm from "./SignUpCapForm";
import GreetCard from "./GreetCard";

const SignUpCard = (props) => {
  return (
    <div className="h-fit flex flex-col md:flex-row overflow-hidden">
      <GreetCard
        greetCardTitle="Welcome Back!"
        greetCardContent="To keep connected with us please login with your personal info"
        greetCardButtonText="LOGIN"
      />
      <SignUpCapForm />
    </div>
  );
};

export default SignUpCard;
