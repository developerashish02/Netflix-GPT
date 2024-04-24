import { Formik } from "formik";
import { useState } from "react";
import { validateValues } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import { BACKGROUND_IMG } from "../utils/constants";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidUser, setIsValidUser] = useState(null);
  const values = {
    email: "",
    password: "",
    firstName: "",
  };

  const handleToggle = (resetForm) => {
    setIsSignIn(!isSignIn);
    resetForm();
    setIsValidUser(null);
  };

  const handleSubmitForm = (values, { setSubmitting, resetForm }) => {
    const { email, password } = values;
    if (!isSignIn) {
      // sign in form
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsValidUser(null);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsValidUser(errorMessage);
          console.log(errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsValidUser(errorMessage);
        });
    }
    setSubmitting(true);
    resetForm();
  };

  return (
    <div
      style={{ backgroundImage: `url(${BACKGROUND_IMG})` }}
      className=" w-screen  h-screen flex items-center"
    >
      <div className="md:w-[80%] lg:w-[30%] text-white px-4 sm:px-8 md:px-12 py-6 md:py-8 mx-auto rounded-md bg-black bg-opacity-85">
        <h1 className="font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <Formik
          initialValues={values}
          validate={validateValues}
          onSubmit={handleSubmitForm}
        >
          {({
            handleChange,
            handleBlur,
            values,
            isSubmitting,
            handleSubmit,
            errors,
            touched,
            resetForm,
          }) => (
            <div className="container">
              <form className="py-6 grid-cols-1 gap-4 " onSubmit={handleSubmit}>
                {!isSignIn && (
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                )}
                <input
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  placeholder="Email"
                  className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
                />

                <p className="text-red-500 my-4 ">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  placeholder="Password"
                  className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
                />
                <p className="text-red-500 my-4 ">
                  {errors.password && touched.password && errors.password}
                </p>

                <p className="text-red-500 my-4 ">{isValidUser} </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-2 px-4 bg-[#E50914] hover:bg-red-500 w-full mt-6 rounded-md font-semibold"
                >
                  {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p className="mt-4 text-base font-normal">
                  {isSignIn ? "New to Netflix?" : "Get Started!"}
                  <span
                    className="cursor-pointer font-bold hover:underline ml-1"
                    onClick={() => handleToggle(resetForm)}
                  >
                    {isSignIn ? "Sign up now." : "Sign In now"}
                  </span>
                </p>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogIn;
