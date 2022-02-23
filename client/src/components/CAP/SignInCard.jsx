import React from "react";
import SignInCapForm from "./SignInCapForm";
import GreetCard from "./GreetCard";

const SignInCard = (props) => {
  return (
    <div className="h-fit flex flex-col md:flex-row overflow-hidden">
      <GreetCard
        greetCardTitle={"Create Account"}
        greetCardContent={
          "To keep connected with us please login with your personal info"
        }
        greetCardButtonText={"SIGN UP"}
      />
      <SignInCapForm />
    </div>
  );
};

export default SignInCard;
