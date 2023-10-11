import { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkvalidData(email.current.value, password.current.value,name.current.value);
    console.log(message);

    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-2 w-full   bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-2 w-full  bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="py-4 text-red-600 text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer text-gray-400"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up"
            : "Already registred Sign In Now !"}
        </p>
        <p className=" text-gray-400 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-400 cursor-pointer">Lear More</span>.
        </p>
      </form>
    </div>
  );
};

export default Login;
