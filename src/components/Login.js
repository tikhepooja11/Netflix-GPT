import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { formatFirebaseErrors } from "../utils/firebase-error-handling";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [signedInUser, setSignedInUser] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //  validate before signin or sign up
    //  If we are using useRef the actual value will be there in current object so need to destructure it.
    const message = validateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      //  create new user in firebase
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          alert("New user registered succesfully");
        })
        .catch((error) => {
          const { code: errorCode, message: errorMessage } = error;
          const firebaseErrorMessage = formatFirebaseErrors(errorCode);
          setErrorMessage(firebaseErrorMessage);
        });
    } else {
      //  sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setSignedInUser(user.email);
          alert(`${user.email} logged in successfully`);
        })
        .catch((error) => {
          const { code: errorCode, message: errorMessage } = error;
          const firebaseErrorMessage = formatFirebaseErrors(errorCode);
          setErrorMessage(firebaseErrorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <p className="text-center">signedIn User : {signedInUser}</p>
      <div className="absolute">
        <img
          className=" w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
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
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 mx-auto my-4 w-full bg-slate-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 mx-auto my-4 w-full bg-slate-800"
        />

        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>

        <button
          onClick={handleButtonClick}
          className="p-4 mx-auto mt-8  bg-red-700 w-full rounded-lg"
        >
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
