import { useState } from "react";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="bg-black  bg-opacity-85 w-[30%] text-white px-12 py-8 mx-auto rounded-md">
      <h1 className="font-bold text-3xl">
        {" "}
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <div className="py-6 ">
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
        />

        <button className="py-2 px-4 bg-[#E50914] hover:bg-red-500 w-full mt-6 rounded-md font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-4 text-base font-normal">
          {isSignIn ? "New to Netflix?" : "Get Started!"}
          <span
            className="cursor-pointer font-bold hover:underline ml-1"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign up now." : "Sign In now"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
