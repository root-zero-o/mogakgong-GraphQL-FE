import React from "react";
import Seo from "../components/Seo";
import BackButton from "../components/BackButton";
import SignupForm from "../components/SignupForm";

const signUp = () => {
  return (
    <div className="wrapper bg-green_mid py-8">
      <BackButton />
      <Seo title="회원가입" />
      <div className="circle z-0 absolute w-96 h-96 right-[-80px] top-[-40px] bg-green_light" />
      <div className="circle z-0 absolute w-96 h-96 left-[-100px] bottom-4 bg-ivory" />
      <SignupForm />
    </div>
  );
};

export default signUp;
