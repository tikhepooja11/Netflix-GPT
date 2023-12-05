import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=" w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-4 mx-auto my-4 w-full bg-slate-800"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 mx-auto my-4 w-full bg-slate-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 mx-auto my-4 w-full bg-slate-800"
        />
        <button className="p-4 mx-auto mt-8  bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={toggleSignInForm}
          className="m-1 p-3 cursor-pointer hover:underline"
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered !!! Sign in now. "}
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
